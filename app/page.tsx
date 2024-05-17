export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

import Container from "./components/Container";
import ListingCard from "./components/listings/ListingCard";
import EmptyState from "./components/EmptyState";

import getListings, { IListingsParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
import getUserImageById from "./actions/getUserImageById";
import ClientOnly from "./components/ClientOnly";
import Landing from "./components/homepage/Landing";

interface HomeProps {
    searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
    const listings = await getListings(searchParams);
    const currentUser = await getCurrentUser();
    let listingCards = [];

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        );
    }

    for (const listing of listings) {
        const userImage = await getUserImageById({ userId: listing.userId });

        listingCards.push(
            <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
                userImage={userImage || ""}
                showAvatar
            />
        );
    }

    return (
        // <ClientOnly>
        //   <Container>
        //     <div
        //       className="grid grid-cols-1 gap-8 pt-24  // sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6"
        //     >
        //       {/* {listings.map((listing) => {
        //         return (
        //           <ListingCard
        //             currentUser={currentUser}
        //             key={listing.id}
        //             data={listing}
        //           />
        //         )
        //       })} */}
        //       {listingCards}
        //     </div>
        //   </Container>
        // </ClientOnly>
        <Landing />
    );
};

export default Home;
