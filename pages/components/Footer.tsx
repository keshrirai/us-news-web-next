import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
// import { NavLink } from "next-compose-plugins";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import useSwr from 'swr'

const fetcher = (url: string, reqData: any) => fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}).then((res) => res.json()).then((res) => res.data.mainNewsSection)

export default function Footer({ }) {

  const { data, error } = useSwr<any[]>('https://news.fastline.one/api/v1/getMainNewsList', fetcher)

  return (

    <div className='bg-[#1A1D26]'>
      <div className='container mx-auto'>
        <div className=' grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 2xl:7/12 xl:w-11/12 lg:w-11/12 md:w-11/12 md:px-0 px-2 mx-auto py-10 lg:space-y-4'>
          <div className='flex flex-col space-y-3'>
            <a className='text-[14px] text-white font-bold' href="">NEWS</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Best Countries</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Best States</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Healthiest Communities</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Сities</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">The Report</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Photos</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">News</a>
            <a className='text-[14px] text-white font-bold' href="">NEWS</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Best Countries</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Best States</a>
          </div>
          <div className='flex flex-col space-y-3'>
            <a className='text-[14px] text-white font-bold' href="">EDUCATION</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Colleges</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Graduate Schools</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Online Colleges</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Global Universities</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">K-12 Schools</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Community Colleges</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Education Rankings</a>
            <a className='text-[14px] text-white font-bold' href="">RANKINGS</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">All Rankings</a>
          </div>
          <div className='flex flex-col space-y-3'>
            <a className='text-[14px] text-white font-bold' href="">HEALTH</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Hospitals</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Doctors</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Senior Living</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Wellness</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Diets</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Health Insurance</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Conditions</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Patient Advice</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Healthcare of Tomorrow</a>
          </div>
          <div className='flex flex-col space-y-3'>
            <a className='text-[14px] text-white font-bold' href="">MONEY</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Investing</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Retirement</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Credit Cards</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Loans</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Banking</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Personal Finance</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Careers</a>
            <a className='text-[14px] text-white font-bold' href="">REAL ESTATE</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Best Places to Live</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Best Places to Retire</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Find an Agent</a>
          </div>
          <div className='flex flex-col space-y-3'>
            <a className='text-[14px] text-white font-bold' href="">CARS</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">New Cars</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Used Cars</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Car Rankings</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Best Car Deals</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Cars for Sale</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Car Buying Advice</a>
            <a className='text-[14px] text-white font-bold' href="">TRAVEL</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Vacations</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Travel Guides</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Hotels</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Cruises</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Rewards</a>
          </div>
          <div className='flex flex-col space-y-3'>
            <a className='text-[14px] text-white font-bold' href="">360 REVIEWS</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Home Security</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Mattress</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Home Warranty</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Internet Providers</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Identity Theft Protection</a>
            <a className='text-[14px] text-white font-bold' href="">DEALS</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Coupons</a>
            <a className='text-[14px] text-white font-bold' href="">INSURANCE</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Car Insurance</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Home Insurance</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Life Insurance</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Renters Insurance</a>
            <a className='text-[14px] text-[#b9baba] font-normal lg:flex hidden' href="">Pet Insurance</a>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center py-5 border-t border-gray-600 2xl:7/12 xl:w-11/12 lg:w-11/12 md:w-11/12 md:px-0 px-2 mx-auto space-y-4'>
          <div>
            <a href="/">
              <Image src="images/usn-logo-large.svg" className="max-w-48 w-48 min-w-48 h-10" loader={uploadcareLoader} unoptimized={true} alt="logo" height={500} width={500} />
            </a>
          </div>
          <div className='flex flex-col lg:flex-row items-center'>
            <div>
              <div className='flex flex-col lg:flex-row items-center'>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">About U.S. News</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Editorial Guidelines</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Contact</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Press</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Advertise</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Newsletters</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Jobs</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Site Map</a>
                <a className='text-[#b9baba] font-normal text-[14px] px-2' href="">Store</a>
              </div>
              <div className='flex flex-col lg:flex-row lg:space-x-3 items-center'>
                <p className='text-[#b9baba] font-normal text-[12px]'>
                  Copyright 2022 © U.S. News & World Report L.P.
                </p>
                <div className='flex flex-col lg:flex-row items-center'>
                  <a className='text-[#b9baba] font-normal text-[12px]' href="">Terms & Conditions/</a>
                  <a className='text-[#b9baba] font-normal text-[12px]' href="">Privacy Policy/</a>
                  <a className='text-[#b9baba] font-normal text-[12px]' href="">California Privacy Notice/</a>
                  <a className='text-[#b9baba] font-normal text-[12px]' href="">California Do Not Sell My Personal Information Request
                  </a>
                </div>
              </div>
            </div>
            <div className='flex space-x-2 items-center'>
              <a className='hover:bg-[#999c99] h-9 w-9 flex mx-auto pt-[6px] pl-[6px] rounded-md' href="https://www.facebook.com/">
                <p className="text-[#ffffff] text-2xl">
                  < GrFacebookOption />
                </p>
              </a>
              <a className='hover:bg-[#999c99] h-9 w-9 flex mx-auto pt-[6px] pl-[6px] rounded-md' href="https://twitter.com/intent/tweet?text=Here%E2%80%99s%20How%20Early%20the%20Flu%20Has%20Struck%20This%20Year&url=https%3A%2F%2Fwww.usnews.com%2Fnews%2Fhealth-news%2Farticles%2F2022-12-09%2Fheres-how-early-the-flu-has-struck-this-season%3Fsrc=usn_tw">
                <p className="text-[#ffffff] text-xl">
                  < FaTwitter />
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}