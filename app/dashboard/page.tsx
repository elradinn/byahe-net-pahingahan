import React from "react";
import { Overview } from "@/app/components/dashboard/Overview";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getListingCount from "../actions/getListingCount";
import getTotalReservations from "../actions/getTotalReservations";
import getTodayTotalReservations from "../actions/getTodayTotalReservations";
import getTotalRevenue from "../actions/getTotalRevenue";
import getReservations from "../actions/getReservations";

const DashboardPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState title="Unauthorized" subtitle="Please login" />
            </ClientOnly>
        );
    }

    const listingCount = await getListingCount({ userId: currentUser.id });
    const totalReservations = await getTotalReservations({
        authorId: currentUser.id,
    });
    const bookingsToday = await getTodayTotalReservations({
        authorId: currentUser.id,
    });
    const totalRevenue = await getTotalRevenue({ authorId: currentUser.id });
    const reservations = await getReservations({ authorId: currentUser.id });

    return (
        <Overview
            listingCount={listingCount}
            totalReservations={totalReservations}
            bookingsToday={bookingsToday}
            totalRevenue={totalRevenue}
            transactions={reservations}
        />
    );
};

export default DashboardPage;
