import { CiBookmark } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaFlipboard } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import Link from "next/link";

export default function health() {
  return (
    <div className="lg:w-11/12 mx-auto px-3 xl:px-0">
      <div className="container mx-auto space-y-3 md:space-y-0 pt-3">
        <div className="flex flex-col lg:flex-row items-center space-x-2 2xl:w-7/12">
          <Link href='/' passHref={true}>
            <span className="text-[12px] text-[#313238] font-bold text-black/70">Home /</span>
          </Link>
          <Link href='/' passHref={true}>
            <span className="text-[12px] text-[#313238] font-bold text-black/70">360 Reviews /</span>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center pb-8 py">
          <div>
            <h1 className=" lg:text-[42px] md:text-[24px] text-16px font-bold py-3">U.S. News 360 Reviews</h1>
            <p className="text-[18px]">Product Reviews and Recommendations You Can Trust</p>
            <div className="flex items-center space-x-2 py-3">
              <div className="flex space-x-2">
                <a href="https://www.facebook.com/">
                  <p className="text-[#3E5B99] text-lg border-2 border-[#3E5B99] rounded-full h-8 w-8 flex justify-center items-center">
                    < GrFacebookOption />
                  </p>
                </a>
                <a href="https://twitter.com/intent/tweet?text=Here%E2%80%99s%20How%20Early%20the%20Flu%20Has%20Struck%20This%20Year&url=https%3A%2F%2Fwww.usnews.com%2Fnews%2Fhealth-news%2Farticles%2F2022-12-09%2Fheres-how-early-the-flu-has-struck-this-season%3Fsrc=usn_tw">
                  <p className="text-[#20A1F2] text-md border-2 border-[#20A1F2] rounded-full h-8 w-8 flex justify-center items-center">
                    < FaTwitter />
                  </p>
                </a>
                <a href="#">
                  <p className="text-[#3E5B99] text-xl border-2 border-[#3E5B99] rounded-full h-8 w-8 flex justify-center items-center">
                    < BiDotsHorizontal />
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[185px] h-[167]" src="/images/360-badge.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="pb-3">
        <div className=" justify-start">
          <div className="border-t-[3px] border-[#CD2927] w-14"></div>
        </div>
        <h1 className="text-[24px] text-black font-bold">CONSUMER</h1>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-5">
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-t-md hover:shadow-md hover:shadow-gray-500 transition duration-500 ease-in-out">
          <a href="/">
            <img className="rounded-t-md object-cover" src="/images/stock.jpg" alt="" />
          </a>
          <p className="text-[18px] text-black font-bold text-center py-3">
            Home Security Systems
          </p>
        </div>

      </div>
    </div>
  )
}