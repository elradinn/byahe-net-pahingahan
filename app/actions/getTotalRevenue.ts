import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
    userId?: string;
    authorId?: string;
}

export default async function getTotalRevenue(params: IParams) {
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

        const totalEarnings = await prisma.reservation.aggregate({
            _sum: {
                totalPrice: true,
            },
            where: query,
        });

        return totalEarnings._sum.totalPrice ?? 0;
    } catch (err: any) {
        throw new Error(err);
    }
}
