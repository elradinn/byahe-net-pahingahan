"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            onClick={() => router.push("/")}
            alt="Logo"
            className="mr-5 cursor-pointer max-h-md"
            width="169"
            height="49"
            src="/images/NewLogo.svg"
        />
    );
};

export default Logo;
