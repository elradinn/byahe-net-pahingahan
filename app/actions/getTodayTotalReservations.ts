import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getTodayTotalReservations(params: IParams) {
    try {
        const { listingId, userId, authorId } = params;

        const query: any = {};

        if (listingId) {
            query.listingId = listingId;
        }

        if (userId) {
            query.userId = userId;
        }

        if (authorId) {
            query.listing = { userId: authorId };
        }

        const today = new Date();
        const startOfDay = new Date(today.setHours(0, 0, 0, 0));
        const endOfDay = new Date(today.setHours(23, 59, 59, 999));

        const todayReservationsCount = await prisma.reservation.count({
            where: {
                ...query,
                createdAt: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
            },
        });

        return todayReservationsCount;
    } catch (err: any) {
        throw new Error(err);
    }
}
