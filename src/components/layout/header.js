import { ArrowRightFromLine, Logs } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import NavItmes from "../ui/NavItems";
import SearchBtn from "../ui/SearchBtn";
import TelBtn from "../ui/TelBtn";

const Header = () => {
    return (
        <div className="navbar justify-between">
            <div className="navbar-start gap-2 w-fit">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost size-16 lg:hidden">
                        <Logs className="size-8" />
                    </div>


                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box w-[272px] z-50 mt-3 p-2 shadow">
                        <div className="mt-2 py-2">
                            <SearchBtn className="flex" />
                        </div>
                        <NavItmes />
                        <div className="mt-2 py-2">
                            <TelBtn className="flex" />
                        </div>
                    </ul>
                </div>
                <Link href="/">
                    <Image width={155} height={45} className="sm:w-28" src="/logo.svg" alt="Logo" />
                </Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavItmes />
                </ul>
            </div>


            <div className="navbar-end gap-5 flex-wrap">
                <SearchBtn className="hidden" />
                <div className="flex gap-5">
                    <TelBtn className="hidden" />

                    <button className="btn btn-primary">
                        <ArrowRightFromLine />
                        <span className="hidden sm:block">ورود/ثبت نام</span>
                    </button>
                </div>
            </div>
        </div>
);}

export default Header