import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getTotalReservations(params: IParams) {
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

        const reservationsCount = await prisma.reservation.count({
            where: query,
        });

        return reservationsCount;
    } catch (err: any) {
        throw new Error(err);
    }
}
