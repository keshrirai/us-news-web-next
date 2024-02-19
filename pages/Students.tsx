// import AOS from 'aos';
// import 'aos/dist/aos.css';
import { CiBookmark } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaFlipboard } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";

import Link from "next/link";

export default function Students() {
  return (
    <div className="2xl:7/12 xl:w-11/12 lg:w-11/12 md:w-11/12 md:px-0 px-2 mx-auto space-y-3 md:space-y-0">
      <div className="flex items-center space-x-2">
        <Link href='/' passHref={true}>
          <span className="text-[12px] text-[#313238] font-bold">Home /</span>
        </Link>
        <Link href='/' passHref={true}>
          <span className="text-[12px] text-[#313238] font-bold">News /</span>
        </Link>
        <Link href='/' passHref={true}>
          <span className="text-[12px] text-[#313238] font-bold">Health News /</span>
        </Link>
        <p className="text-[12px] text-[#484952] pt-1">A Look at the Flu’s Early Surge</p>
      </div>


      <div className="flex flex-col lg:flex-row justify-between items-center pb-8 border-b-2">
        <div>
          <h1 className=" lg:text-[42px] md:text-[24px] text-16px font-bold py-3">Here’s How Early the Flu Has Struck This Year</h1>
          <p className="text-[18px]">Hospitalization data points to how the flu season is kicking into high gear much earlier than in seasons past.</p>
          <span className="text-[16px] text-[#727684] flex py-3">
            By <p className="font-medium text-black/80 px-1">Christopher Wolf</p> Dec. 9, 2022, at 2:50 p.m.
          </span>

          <div className="flex items-center space-x-2">
            <button className="flex space-x-2 border border-gray-400 px-[14px] py-[6px] rounded-full">
              <div>
                <p className="text-2xl text-gray-400">
                  < CiBookmark />
                </p>
              </div>
              <div>
                <p className="text-[14px]">Save</p>
              </div>
            </button>

            <div className="flex space-x-2">
              <a href="https://www.facebook.com/">
                <p className="text-[#3E5B99] text-xl border border-[#3E5B99] rounded-full h-8 w-8 flex justify-center items-center">
                  < GrFacebookOption />
                </p>
              </a>
              <a href="https://twitter.com/intent/tweet?text=Here%E2%80%99s%20How%20Early%20the%20Flu%20Has%20Struck%20This%20Year&url=https%3A%2F%2Fwww.usnews.com%2Fnews%2Fhealth-news%2Farticles%2F2022-12-09%2Fheres-how-early-the-flu-has-struck-this-season%3Fsrc=usn_tw">
                <p className="text-[#20A1F2] text-xl border border-[#20A1F2] rounded-full h-8 w-8 flex justify-center items-center">
                  < FaTwitter />
                </p>
              </a>
              <a href="https://share.flipboard.com/bookmarklet/popout?v=2&title=Here%E2%80%99s%20How%20Early%20the%20Flu%20Has%20Struck%20This%20Year&url=https%3A%2F%2Fwww.usnews.com%2Fnews%2Fhealth-news%2Farticles%2F2022-12-09%2Fheres-how-early-the-flu-has-struck-this-season%3Fsrc=usn_fl">
                <p className="text-[#F52929] text-xl border border-[#F52929] rounded-full h-8 w-8 flex justify-center items-center">
                  < FaFlipboard />
                </p>
              </a>
              <a href="/">
                <p className="text-[#3E5B99] text-xl border border-[#3E5B99] rounded-full h-8 w-8 flex justify-center items-center">
                  < BiDotsHorizontal />
                </p>
              </a>
            </div>
          </div>
        </div>

        <div>
          <img className="w-[185px] h-[167]" src="/images/healthiest.png" alt="" />
        </div>
      </div>


      <div className="pt-8 flex">
        <div>
          <img className="w-[774px] h-[516px]" src="/images/Traveling.jpg" alt="" />
          <p className="text-[14px] w-[780px] py-3 border-b-2 break-all">
            Traveling and focusing on personal development are common ways students spend their gap year.(GETTY IMAGES)
          </p>

          <p className="text-[18px] w-[774px] text-black/80 py-5 break-all">
            While many students head directly to
            <Link href='/' passHref={true}>
              <span className="text-[#1D65D4]">college</span>
            </Link>
            after graduating from high school, a smaller cohort chooses an alternative: a gap year
          </p>

          <p className="text-[18px] w-[774px] text-black/80 py-5 break-all">
            What may have previously been seen as an unconventional path has become more accepted in recent years, particularly since the COVID-19 pandemic. When colleges either shut down or moved to virtual learning, many students opted to defer enrollment and take a gap year, experts say.
          </p>

          <section>
            <img className="py-5 mx-auto" src="/images/add.png" alt="" />
          </section>


          <div className="text-[16px]">
            [
            <b> READ:</b>
            <Link href='/' passHref={true}>
              <span className="text-[#1D65D4] px-2">Why the Flu Season Could Be Severe</span>
            </Link>
            ]
          </div>


          <p className="text-[18px] w-[774px] text-black/80 py-5 break-all">
            The Gap Year Association, an Oregon-based nonprofit that helps students access gap year opportunities, estimates that on average, between 40,000 and 60,000 students take a gap year each academic year. That number rose to an estimated 130,000 students during the 2020-2021 school year, according to the organization.
            High school counselors, students and parents are becoming more aware of the variety of options after high school and seeing the benefits of taking a gap year, says Jennifer Sullivan, founder of Fast Forward College Counseling.
          </p>
          <p className="text-[18px] w-[774px] text-black/80 py-5 break-all">
            “It’s not an all-or-nothing now,” she says. “You’re not just going to college or you’re going to work. There’s a lot of in-between. There’s a lot of gray area where some students do choose to take a gap year or to take a gap semester, then decide that they’re ready.”
          </p>

          <h1>What Is a Gap Year?</h1>


        </div>



        <div className="space-y-2 relative">

          <section>
            <img className="py-5 mx-auto " src="/images/add4.png" alt="" />
          </section>


          <div className=" flex justify-center lg:justify-start">
            <div className="border-t-4 border-[#CD2927] w-16"></div>
          </div>
          <h1 className="text[18px] text-black font-bold">MOST POPULAR</h1>
          <a href="/" className="border border-[#D3D7DC] flex items-center space-x-2 py-2 px-2">
            <p className="text-[14px] text-[#272A33]">
              HEALTHIEST COMMUNITIES HEALTH NEWS
              Survivors of Gangs and Gun Violence
            </p>

            <img className="w-[63px] h-[63px]" src="/images/group-08.jpg" alt="" />
          </a>
          <a href="/" className="border border-[#D3D7DC] flex items-center space-x-2 py-2 px-2">
            <p className="text-[14px] text-[#272A33]">
              HEALTHIEST COMMUNITIES HEALTH NEWS
              Survivors of Gangs and Gun Violence
            </p>

            <img className="w-[63px] h-[63px]" src="/images/group-08.jpg" alt="" />
          </a>
          <a href="/" className="border border-[#D3D7DC] flex items-center space-x-2 py-2 px-2">
            <p className="text-[14px] text-[#272A33]">
              HEALTHIEST COMMUNITIES HEALTH NEWS
              Survivors of Gangs and Gun Violence
            </p>

            <img className="w-[63px] h-[63px]" src="/images/group-08.jpg" alt="" />
          </a>
          <a href="/" className="border border-[#D3D7DC] flex items-center space-x-2 py-2 px-2">
            <p className="text-[14px] text-[#272A33]">
              HEALTHIEST COMMUNITIES HEALTH NEWS
              Survivors of Gangs and Gun Violence
            </p>

            <img className="w-[63px] h-[63px]" src="/images/group-08.jpg" alt="" />
          </a>

          <div className="border rounded-t col-span-2 h-fit w-full mx-auto pb-5">
            <div className="bg-[#F4F7F9] border-b-2 border-gray-400">
              <div className=" -translate-y-5 flex justify-center">
                <img className="h-20 w-20" src="/images/badge-best-gold.svg" alt="" />
              </div>
              <div>
                <p className="text-lg font-bold text-center">Education Rankings</p>
              </div>
            </div>

            <div className="bg-[#ffffff] px-5 space-y-4 pt-5">
              <div className="flex  justify-between">
                <div>
                  <p className="text-sm text-black/70">Colleges</p>
                  <p className="text-sm text-black/70">Grad Schools</p>
                  <p className="text-sm text-black/70">K-12 Schools</p>
                </div>
                <div>
                  <p className="text-sm text-black/70">Global Universities</p>
                  <p className="text-sm text-black/70">Online Programs</p>
                </div>
              </div>

              <p className="text-black font-bold text-xs">SEE ALL EDUCATION RANKINGS »</p>
              <p className="text-black font-bold text-xs">SEE ALL EDUCATION RANKINGS »</p>
            </div>
          </div>

          <section>
            <img className=" left-16 mx-auto absolute position bottom-5" src="/images/add3.png" alt="" />
          </section>

        </div>
      </div>




    </div>
  )
}