import { CiBookmark } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaFlipboard } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import Link from "next/link";

export default function health() {
  return (
    <div className="lg:w-11/12 mx-auto px-3 xl:px-0">
      <div className="container mx-auto space-y-3 md:space-y-0">
        <div className="flex flex-col lg:flex-row items-center space-x-2 2xl:w-7/12">
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
        <div className="pt-8 flex flex-col xl:flex-row">
          <div>
            <img className="lg:w-[774px] lg:h-[516px] object-cover" src="/images/gettyimages-1303556647.jpg" alt="" />
            <p className="lg:text-[14px] lg:w-[780px] py-3 border-b-2 break-all">
              Averaging across seasons, weekly hospitalization rates typically reach or exceed 1.0 per 100,000 population just before the year’s end, or around MMWR week 50, according to data from the CDC.(GETTY STOCK IMAGES)
            </p>

            <p className="lg:text-[18px] lg:w-[774px] text-black/80 py-5 break-all">
              A look at historical data shows the 2022-2023 flu season is off to a dramatic start, with the weekly hospitalization rate 20 times higher than at the same time last season.
            </p>
            <p className="lg:text-[18px] lg:w-[774px] text-black/80 py-5 break-all">
              The Centers for Disease Control and Prevention tracks flu hospitalization rates using the
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4]">Influenza Hospitalization Surveillance Network</span>
              </Link>
              , which currently collects data from more than 70 counties across 13 states and represents nearly 30 million people, or 9% of the U.S. population. The CDC typically lists rates reflecting cases from early October to late April of the following year, reporting figures for each “
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4]">MMWR week.</span>
              </Link>
              ” The surveillance network’s dashboard reports weekly hospitalization rates from the 2009-2010 through the 2022-2023 seasons, except for the 2020-2021 season, when there was extremely low flu activity amid the COVID-19 pandemic.
            </p>
            <div className="text-[16px]">
              [
              <b> READ:</b>
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] px-2">Why the Flu Season Could Be Severe</span>
              </Link>
              ]
            </div>
            <p className="lg:text-[18px] lg:w-[774px] text-black/80 py-5 break-all">
              Averaging across those seasons,
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4]">weekly hospitalization rates</span>
              </Link>
              typically reach or exceed 1.0 per 100,000 population just before the year’s end, or around MMWR week 50. They generally peak near the start of the following year, at around 5 hospitalizations per 100,000 people on average – though seasons can vary greatly in intensity. After reaching a peak, rates typically drop back down below 1.0 by about four months into the new year.
            </p>
            <p className="lg:text-[18px] lg:w-[774px] text-black/80 py-5 break-all">
              But that’s not always the case, and this season has been a notable outlier: The weekly rate surpassed 1.0 per 100,000 by week 43, marking a much earlier rise that otherwise hasn’t occurred since the 2009-2010 season over a decade ago. For week 48 this season, or the week ending Dec. 3, the data reflects a hospitalization rate of 5.9 hospitalizations per 100,000 people. That’s down slightly from a week earlier, but still past the average historical peak and a figure about 20 times higher than this time last season, when the rate sat at 0.3. The CDC does note that the 2021-2022 flu season was extended into June due to later influenza activity.
            </p>
          </div>
          <div className="space-y-2">
            <div className=" justify-start">
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
          </div>
        </div>
        <section>
          <img className="flex mx-auto py-3" src="/images/add3.png" alt="" />
        </section>
        <div className="flex flex-col lg:flex-row lg:space-x-4 container mx-auto space-y-3 md:space-y-0 py-5">
          <div className="space-y-3 lg:w-[80%]">
            <div className="flex flex-col lg:flex-row border-t-2 border-gray-500 lg:space-x-10 py-1">
              <div className="space-y-3 w-full">
                <a className="a1 text-[#000000] text-xs font-bold text-[20px]" href="">The 10 Worst Presidents</a>
                <div>
                  <a className=" text-black hover:text-black/80 text-[20px] font-semibold" href="">Not all U.S. presidents are missed once they leave the White House</a>
                </div>
                <p className="text-[14px] text-[#3a3c42]">
                  Hospitalization data points to how the flu season is kicking into high gear much earlier than in seasons past.
                </p>
                <p className="text-[12px] text-[#878A96] pt-2">
                  <b className="text-[#000000]">U.S. News Staff </b>July 6, 2021
                </p>
              </div>
              <div className="lg:w-96 h-full">
                <Link href='/health' passHref={true}>
                  <img className="h-48 w-72" src="/images/presidents.jpg" alt="" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row border-t-2 border-gray-500 lg:space-x-10 py-1">
              <div className="space-y-3 w-full">
                <a className="a1 text-[#000000] text-xs font-bold text-[20px]" href="">The 10 Worst Presidents</a>
                <div>
                  <a className=" text-black hover:text-black/80 text-[20px] font-semibold" href="">Not all U.S. presidents are missed once they leave the White House</a>
                </div>
                <p className="text-[14px] text-[#3a3c42]">
                  Hospitalization data points to how the flu season is kicking into high gear much earlier than in seasons past.
                </p>
                <p className="text-[12px] text-[#878A96] pt-2">
                  <b className="text-[#000000]">U.S. News Staff </b>July 6, 2021
                </p>
              </div>
              <div className="lg:w-96 h-full">
                <Link href='/health' passHref={true}>
                  <img className="h-48 w-72" src="/images/Dentar.webp" alt="" />
                </Link>
              </div>
            </div>
            <section>
              <img className="py-5 mx-auto" src="/images/add2.jpeg" alt="" />
            </section>
            <div className="flex flex-col lg:flex-row border-t-2 border-gray-500 lg:space-x-10 py-1">
              <div className="space-y-3 w-full">
                <a className="a1 text-[#4889f9] font-bold text-[22px]" href="">Cartoons on President Donald Trump</a>
                <p className="text-[12px] text-[#878A96] pt-2">
                  <b className="text-[#000000]">U.S. News Staff </b>July 6, 2021
                </p>
              </div>
              <div className="lg:w-96 h-full">
                <Link href='/health' passHref={true}>
                  <img className="h-48 w-72" src="/images/ele.jpg" alt="" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row border-t-2 border-gray-500 lg:space-x-10 py-1">
              <div className="space-y-3 w-full">
                <a className="a1 text-[#000000] text-xs font-bold text-[20px]" href="">The 10 Worst Presidents</a>
                <div>
                  <a className=" text-black hover:text-black/80 text-[20px] font-semibold" href="">Not all U.S. presidents are missed once they leave the White House</a>
                </div>
                <p className="text-[14px] text-[#3a3c42]">
                  Hospitalization data points to how the flu season is kicking into high gear much earlier than in seasons past.
                </p>
                <p className="text-[12px] text-[#878A96] pt-2">
                  <b className="text-[#000000]">U.S. News Staff </b>July 6, 2021
                </p>
              </div>
              <div className="lg:w-96 h-full">
                <Link href='/health' passHref={true}>
                  <img className="h-48 w-72" src="/images/presidents.jpg" alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <section>
              <img className="py-3 pb-5 mx-auto" src="/images/add5.png" alt="" />
            </section>
            <div className=" flex justify-center lg:justify-start">
              <div className="border-t-4 border-[#CD2927] w-16"></div>
            </div>
            <h1 className="text[18px] text-black font-bold">MOST POPULAR</h1>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 2xl:w-[40rem]">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC]">1</p>
              <p className="text-[14px] text-[#272A33]">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC]">2</p>
              <p className="text-[14px] text-[#272A33]">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC]">3</p>
              <p className="text-[14px] text-[#272A33]">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC]">4</p>
              <p className="text-[14px] text-[#272A33]">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
          </div>
        </div>
        <section>
          <img className="py-5 mx-auto" src="/images/add4.png" alt="" />
        </section>
      </div>
    </div>
  )
}