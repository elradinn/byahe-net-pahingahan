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
            width="100"
            height="100"
            src="/images/Logo.png"
        />
    );
};

export default Logo;
