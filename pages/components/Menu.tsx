import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

export default function Header(props) {
    let { openSidebar, SetSidebar } = props;
    const [showNav, setShowNav] = useState(true)

    return (
        <div className="flex justify-end fixed top-0 left-0 bg-white/50 w-full h-screen z-40">
            <div className="bg-[#1A1D26] w-[20rem] px-2 overflow-y-auto
             h-full py-3">

                <div className="flex items-center justify-between px-2">
                    <h1 className="text-white text-[16px] font-bold">MY ACCOUNT</h1>
                    <p onClick={() => SetSidebar(!openSidebar)} className="text-4xl font-bold text-white hover:bg-[#5d5d5d] rounded-full cursor-pointer">
                        < IoCloseSharp />
                    </p>
                </div>
                <a className="hover:border border-[#b6b6b6] hover:bg-gray-700 w-full flex space-x-3 py-[10px] px-2 rounded-lg" href="/login">
                    <h1 className="text-white text-2xl">
                        <CgProfile />
                    </h1>
                    <h1 className="text-white text-[16px] font-bold">
                        Sign in
                    </h1>
                </a>

                <h1 className="text-white text-[16px] font-bold px-2 py-2 cursor-default">MORE FROM U.S. NEWS</h1>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href='/news'>Education</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] rounded-lg px-2" href='/news'>Health</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href='/news'>Money</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/">Travel</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/cars">Cars</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/">Law Firms</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/">Insurance</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/">Real Estate</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/360-reviews">360 Reviews</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/">360 Coupons</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/">Rankings</a>
                <a className="hover:border border-[#b6b6b6] text-white font-bold  hover:bg-gray-700 w-full text-[16px] flex py-[10px] px-2 rounded-lg" href="/">Events</a>
                <div className="py-5">
                    <a className="text-white w-full text-[14px] flex py-[10px] px-2 rounded-lg" href="/">Contact</a>
                    <a className="text-white w-full text-[14px] flex py-[10px] px-2 rounded-lg" href="/">Employment</a>
                    <a className="text-white w-full text-[14px] flex py-[10px] px-2 rounded-lg" href="/">Advertising</a>
                    <a className="text-white w-full text-[14px] flex py-[10px] px-2 rounded-lg" href="/">Terms & Conditions</a>
                    <a className="text-white w-full text-[14px] flex py-[10px] px-2 rounded-lg" href="/">Privacy Policy</a>
                </div>
                <div className="flex  items-center space-x-1 pb-5">
                    <a className='hover:bg-[#999c99] h-9 w-9 flex pt-[6px] pl-[6px] rounded-md' href="">
                        <p className="text-[#ffffff] text-2xl">
                            < GrFacebookOption />
                        </p>
                    </a>
                    <a className='hover:bg-[#999c99] h-9 w-9 flex pt-[6px] pl-[6px] rounded-md' href="">
                        <p className="text-[#ffffff] text-xl">
                            < FaTwitter />
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}