import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import { CgSearch, CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

export default function Header(props) {

    let { openSidebar, SetSidebar } = props;
    const [showNav, setShowNav] = useState(true)

    return (
        <div className="bg-[#1A1D26]">
            <nav className="flex items-center justify-between flex-wrap py-2  mx-auto z-10 lg:px-5 border-t border-gray-600/60 w-full">
                <div className="flex items-center flex-shrink-0 text-white lg:mx-auto">
                    <a className="pl-2 lg:pl-0" href="/">
                        <Image src="images/usn-logo-large.svg" className="lg:max-w-48 lg:w-48 min-w-48 lg:h-10 w-32" loader={uploadcareLoader} unoptimized={true} alt="logo" height={500} width={500} />
                    </a>
                </div>
                <div className="flex md:space-x-3 items-center justify-end">
                    <p className="text-white text-2xl hover:bg-gray-500 p-2 rounded-lg cursor-pointer">
                        <CgSearch />
                    </p>
                    <button className="text-white text-[13px] border-2 hover:border-double rounded-lg px-[10px] py-[2px] font-semibold hidden md:flex hover:ring-1 ring-white ring-offset-[#1A1D26] ring-offset-2 transition duration-700">
                        <a href="/signup">
                            sign in
                        </a>
                    </button>
                    <a href="#" className="text-white text-2xl hover:bg-gray-500 p-2 rounded-lg cursor-pointer flex md:hidden">
                        <CgProfile />
                    </a>
                    <p onClick={() => SetSidebar(!openSidebar)} className="text-white text-2xl hover:bg-gray-500 p-2 rounded-lg cursor-pointer">
                        <IoMenu />
                    </p>
                </div>
            </nav>
            <div className="lg:flex hidden space-x-10 justify-center border-t pb-1 border-gray-600/60">
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">NEWS</span>
                    </Link>
                </div>
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">EDUCATION</span>
                    </Link>
                </div>
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">HEALTH</span>
                    </Link>
                </div>
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">MONEY</span>
                    </Link>
                </div>
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">TRAVEL</span>
                    </Link>
                </div>
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">CARS</span>
                    </Link>
                </div>
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">LAW FIRMS</span>
                    </Link>
                </div>
                <div>
                    <Link href='/news' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">REAL ESTATE</span>
                    </Link>
                </div>
                <div>
                    <Link href='/360-reviews' passHref={true}>
                        <span className="text-white text-[0.75rem] font-extrabold">360 REVIEWS</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}