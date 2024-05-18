import React from "react";
import { Overview } from "@/app/components/dashboard/Overview";
import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import getListingCount from "../actions/getListingCount";

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

    return <Overview listingCount={listingCount} />;
};

export default DashboardPage;
