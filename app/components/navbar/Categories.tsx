"use client";

import Container from "../Container";

import { TbBeach, TbMountain, TbPool, TbUfo, TbVolcano } from "react-icons/tb";
import {
    GiWindmill,
    GiIsland,
    GiCastle,
    GiForestCamp,
    GiMountainCave,
    GiCactus,
    GiBarn,
    GiJungle,
    GiTreehouse,
    GiFlowerPot,
    GiFamilyHouse,
    GiPalmTree,
} from "react-icons/gi";
import {
    MdOutlineCabin,
    MdOutlineDiamond,
    MdOutlineVilla,
} from "react-icons/md";
import { FaLandmark, FaSkiing, FaWater } from "react-icons/fa";
import { BsSnow, BsWater } from "react-icons/bs";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { AiOutlineHeart } from "react-icons/ai";

import CategoryBox from "../CategoryBox";
import { useSearchParams, usePathname } from "next/navigation";
import { IoMdSwitch } from "react-icons/io";
import useSearchModal from "@/app/hooks/useSearchModal";
// import { useState, useRef, useEffect } from "react";
// import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
// import { IoMdSwitch } from "react-icons/io";

export const categories = [
    {
        label: "Beachfront",
        icon: TbBeach,
        description:
            "Enjoy a seaside escape with beautiful views and easy access to the beach.",
    },
    {
        label: "Rustic",
        icon: GiWindmill,
        description:
            "Experience a simpler way of life with cozy cabins and homes that evoke a bygone era.",
    },
    {
        label: "Cabin",
        icon: MdOutlineCabin,
        description:
            "Experience rustic living in a cozy cabin. Perfect for a romantic getaway or a peaceful retreat in nature.",
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description:
            "Stay in sleek, contemporary homes that offer style and sophistication.",
    },
    {
        label: "Mountain",
        icon: TbMountain,
        description:
            "Escape to the mountains and enjoy breathtaking views, fresh air, and outdoor activities.",
    },
    {
        label: "Pools",
        icon: TbPool,
        description:
            "Relax and unwind in homes with private pools, hot tubs, and luxurious amenities.",
    },
    {
        label: "Tropical",
        icon: GiIsland,
        description:
            "Discover our Tropical homes, a perfect escape to paradise. Relax and explore with stunning views, beaches, and exotic nature.",
    },
    {
        label: "Lakefront",
        icon: BsWater,
        description:
            "Enjoy lakefront homes with beautiful views and water activities like fishing and boating.",
    },
    {
        label: "Tiny Home",
        icon: HiOutlineHomeModern,
        description:
            "Experience the cozy and minimalist lifestyle in a compact home, often with unique and space-saving designs.",
    },
    {
        label: "OMG!",
        icon: TbUfo,
        description:
            "Unleash your inner weirdo and stay in a place that's as unique as you are! From treehouses to underground bunkers, these listings are anything but ordinary.",
    },
    {
        label: "Island",
        icon: GiPalmTree,
        description:
            "Stay on a private island and experience the ultimate in seclusion and luxury.",
    },
    {
        label: "Camping",
        icon: GiForestCamp,
        description:
            "Experience luxury camping in beautiful natural settings with all the amenities of home.",
    },
    {
        label: "Caves",
        icon: GiMountainCave,
        description:
            "Stay in unique and unusual homes carved into cliffs and nestled in natural caves.",
    },
    {
        label: "Farm",
        icon: GiBarn,
        description:
            "Get back to nature with farm stays and rural escapes, surrounded by fields and countryside.",
    },
    {
        label: "Mansion",
        icon: GiFamilyHouse,
        description:
            "Live like royalty in these grand and luxurious estates, complete with lavish amenities and sprawling grounds.",
    },
    {
        label: "Jungle",
        icon: GiJungle,
        description:
            "Explore lush forests and exotic wildlife in some of the world's most beautiful jungles.",
    },
    {
        label: "Romantic",
        icon: AiOutlineHeart,
        description:
            "Experience the ultimate romantic getaway in some of the world's most beautiful destinations.",
    },
    {
        label: "Garden",
        icon: GiFlowerPot,
        description: "Relax in beautiful gardens and green spaces.",
    },
    {
        label: "Historic",
        icon: FaLandmark,
        description:
            "Stay in some of the world's most famous historic sites and monuments.",
    },
    {
        label: "Treehouse",
        icon: GiTreehouse,
        description:
            "Experience a unique and cozy getaway in a treehouse surrounded by nature.",
    },
    {
        label: "Lux",
        icon: MdOutlineDiamond,
        description:
            "Indulge in opulent and extravagant homes and villas, with all the amenities of a five-star hotel.",
    },
    {
        label: "Heritage",
        icon: GiCastle,
        description:
            "Stay in homes that are part of the Philippines' rich cultural and historical heritage.",
    },
    {
        label: "Surfing",
        icon: FaWater,
        description:
            "Stay close to the best surfing spots and enjoy the waves in the Philippines.",
    },
    {
        label: "Volcano View",
        icon: TbVolcano,
        description:
            "Enjoy breathtaking views of the Philippines' famous volcanoes from your accommodation.",
    },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get("category");
    const pathname = usePathname();
    const searchModal = useSearchModal();

    // const [showRightScroll, setShowRightScroll] = useState(false);
    // const containerRef = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //     const container = containerRef.current;

    //     if (container) {
    //         setShowRightScroll(container.scrollWidth > container.clientWidth)
    //     }
    // }, []);

    // const handleRightScroll = () => {
    //     const container = containerRef.current;

    //     if (container) {
    //         container.scrollBy({
    //             left: container.clientWidth,
    //             behavior: "smooth",
    //         });
    //     }
    // };

    const isMainPage = pathname === "/";

    if (!isMainPage) return null;

    return (
        <Container categoryContainer>
            <div
                // ref={containerRef}
                className="flex flex-row items-center justify-between w-full gap-4 pt-2 overflow-x-auto "
            >
                {/* {showRightScroll && (
                    <div className="w-[220px] h-1/2 flex flex-row items-center justify-end gap-4 absolute right-[80px] bg-gradient-to-r from-transparent from-10% via-white via-30% to-white to-90%">
                        <button
                            className="p-2 bg-white border rounded-full shadow-md text-neutral-800"
                            onClick={handleRightScroll}
                        >
                            <AiOutlineRight />
                        </button>
                        <div className="px-3 py-4 bg-white border text-neutral-800 rounded-xl">
                            <div className="flex flex-row items-center gap-4">
                            <IoMdSwitch /> Filters
                            </div>
                        </div>
                    </div>
                )} */}
                {categories.map((item, index) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                        firstCategory={index === 0}
                        lastCategory={index === categories.length - 1}
                    />
                ))}
            </div>
            <div
                onClick={searchModal.onOpen}
                className="flex-row items-center hidden gap-2 p-3 text-xs font-bold transition duration-150 ease-in-out border cursor-pointer  sm:flex border-neutral-400 text-semibold rounded-xl hover:shadow-md ml-14"
            >
                <IoMdSwitch size={21} /> Filters
            </div>
            {/* <div className="p-1 border rounded-full cursor-pointer border-neutral-400">
                <FiChevronRight size={21}/>
            </div> */}
        </Container>
    );
};

export default Categories;
