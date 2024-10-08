import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">ERDEN</div>
                </Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo-icon.png" alt="Logo" width={24} height={24} />
                        <div className="text-2xl tracking-wide">ERDEN</div>
                    </Link>
                    <div className="hidden xl:flex gap-4 ">
                        <Link href="/" className="hover:text-lama">Homepage</Link>
                        <Link href="/shop" className="hover:text-lama">Shop</Link>
                        <Link href="/deals" className="hover:text-lama">Deals</Link>
                        <Link href="/about" className="hover:text-lama">About</Link>
                        <Link href="/contact" className="hover:text-lama">Contact</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    );
}

export default Navbar;