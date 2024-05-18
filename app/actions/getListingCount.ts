import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export default async function getListingCount(params: IListingsParams) {
    try {
        const {
            userId,
            guestCount,
            roomCount,
            bathroomCount,
            startDate,
            endDate,
            locationValue,
            category,
        } = params;

        let query: any = {};

        if (userId) query.userId = userId;

        if (category) query.category = category;

        if (guestCount) query.guestCount = { gte: +guestCount };

        if (roomCount) query.roomCount = { gte: +roomCount };

        if (bathroomCount) query.bathroomCount = { gte: +bathroomCount };

        if (locationValue) query.locationValue = locationValue;

        if (startDate && endDate) {
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: {
                                    gte: startDate,
                                },
                                startDate: {
                                    lte: endDate,
                                },
                            },
                            {
                                startDate: {
                                    lte: endDate,
                                },
                                endDate: {
                                    gte: startDate,
                                },
                            },
                        ],
                    },
                },
            };
        }

        const listingsCount = await prisma.listing.count({
            where: query,
        });

        return listingsCount;
    } catch (err: any) {
        throw new Error(err);
    }
}
