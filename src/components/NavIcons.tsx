"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const router = useRouter();

    // TEMPORARY
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push("/login");
        }
        setIsProfileOpen((prev) => !prev);
    }

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/profile.png" alt="Profile" width={22} height={22} className="cursor-pointer" onClick={handleProfile} />
            {isProfileOpen && (
                <div className="absolute p-4 pb-3 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="/" className="p-1.5 rounded-md hover:bg-slate-300">Profile</Link>
                    <div className="p-1.5 rounded-md cursor-pointer hover:bg-slate-300">Logout</div>
                </div>
            )}
            <Image src="/notification.png" alt="Notification" width={22} height={22} className="cursor-pointer" />
            <div className="relative cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
                <Image src="/cart.png" alt="Cart" width={22} height={22} className="cursor-pointer" />
                <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-lama text-white text-sm flex items-center justify-center">11</div>
            </div>
            {isCartOpen && <CartModal />}
        </div>
    );
}

export default NavIcons;