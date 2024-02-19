import { CiBookmark } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaFlipboard } from "react-icons/fa";
import { BiDotsHorizontal } from "react-icons/bi";
import Link from "next/link";

export default function Bathroom() {
  return (
    <div className="lg:w-11/12 mx-auto px-3 xl:px-0">
      <div className="container mx-auto space-y-3 md:space-y-0">
        <div className="flex flex-col lg:flex-row items-center space-x-2">
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
          <div className="pt-5 lg:pt-0">
            <img className="w-[185px] h-[167]" src="/images/healthiest.png" alt="" />
          </div>
        </div>
        <div className="pt-8 flex flex-col lg:flex-row lg:space-x-6">
          <div className="lg:w-[80%] w-full">
            <img className="w-[774px] lg:h-[516px] object-cover" src="/images/Bathroom.jpg" alt="" />
            <p className="text-[14px] lg:w-[780px] w-full py-3 border-b-2 break-all ">
              To ensure your work comes out perfectly, you need the right tools and materials and proper surface preparation – not to mention the right color.(GETTY IMAGES)
            </p>
            <p className="text-[18px] w-full text-black/80 py-5 break-all">
              A
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] px-2">fresh coat of paint</span>
              </Link>
              on the
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] px-2">bathroom</span>
              </Link>
              walls is an inexpensive way to smooth out any flaws and change the look of the room. Painting can be an easy
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] px-2">DIY weekend project</span>
              </Link>
              , but you should also consider the type of paint you use that can withstand high levels of humidity and how to make your way around tight spaces.
            </p>
            <div className="text-[16px]">
              [
              <b> READ:</b>
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] px-2">Why the Flu Season Could Be Severe</span>
              </Link>
              ]
            </div>
            <p className="text-[18px] w-full text-black/80 py-5 break-all">
              To ensure your work comes out perfectly, you need the right tools and materials and proper surface preparation – not to mention the right color. Here's a look at painting your bathroom in 10 steps.
            </p>
            <div>
              <ul className="space-y-2 list-disc">
                <li className="text-[18px]">
                  Choose your paint.
                </li>
                <li className="text-[18px]">
                  Gather your supplies.
                </li>
                <li className="text-[18px]">
                  Inspect the walls.
                </li>
                <li className="text-[18px]">
                  Remove hardware.
                </li>
                <li className="text-[18px]">
                  Clean all surfaces you plan to paint.
                </li>
                <li className="text-[18px]">
                  Cover everything you do not want to be painted.
                </li>
                <li className="text-[18px]">
                  Prime the walls.
                </li>
                <li className="text-[18px]">
                  Paint from the top down.
                </li>
                <li className="text-[18px]">
                  Use a roller on the walls.
                </li>
              </ul>
            </div>
            <div className="text-[16px]">
              [
              <b> READ:</b>
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] px-2">How to Paint A Bedroom </span>
              </Link>
              ]
            </div>
            <h1 className="text-black text-[24px] font-bold py-3">Choose Your Paint</h1>
            <p className="text-[18px] text-black py-3 w-full">
              The paint you choose for your bathroom matters. While
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] px-2">picking a color</span>
              </Link>
              you love can be a challenge, you also need a paint formulated for high moisture levels.
            </p>
            <p className="text-[18px] text-black py-3 w-full">
              Ed Edrosa, senior product manager at Behr Paint Company, recommends paints that provide effective protection against mold and mildew growth. “Since bathrooms are wet places, go for satin and semi-gloss paints since they do a better job in resisting moisture than lower-sheen paints,” Edrosa says.
            </p>
            <p className="text-[18px] text-black py-3 w-full">
              If you don’t want to go with traditional semi-gloss paint, Mallory Micetich, home expert at Angi, says to find a paint formulated specifically for bathroom use, which is available in a variety of different finishes.
            </p>
            <p className="text-[18px] text-black py-3 w-full">
              When it comes to color, Micetich says it’s more of a personal preference. Light colors are generally more popular in bathrooms than darker colors, especially if the bathroom lacks natural light. “Humidity makes bathrooms susceptible to 'pigmentation runs,' which is when steam breaks down paint and leaves streaks on the walls,” Micetich says. “These streaks are more visible on dark-colored walls.”
            </p>
            <p className="text-[18px] text-black py-3 w-full">
              You will need one to two gallons of paint, depending on the size of the bathroom. You may also need to pick up some primer, which is used to seal the surface and helps the paint adhere to the wall. “You should also consider how many coats of paint your walls will need. If you’re using a paint color that requires several coats, you’ll need to purchase more paint,” Micetich adds.
            </p>
            <section>
              <img className="flex mx-auto py-3" src="/images/add3.png" alt="" />
            </section>
            <div>
              <h1 className="text-[24px] text-black font-bold py-2">Gather Your Supplies</h1>
              <p className="text-black text-[18px] pb-3">You need the right equipment before you start painting. Make sure you have:</p>
              <ul className="space-y-2 list-disc">
                <li className="text-[18px]">
                  Choose your paint.
                </li>
                <li className="text-[18px]">
                  Gather your supplies.
                </li>
                <li className="text-[18px]">
                  Inspect the walls.
                </li>
                <li className="text-[18px]">
                  Remove hardware.
                </li>
                <li className="text-[18px]">
                  Clean all surfaces you plan to paint.
                </li>
                <li className="text-[18px]">
                  Cover everything you do not want to be painted.
                </li>
                <li className="text-[18px]">
                  Prime the walls.
                </li>
                <li className="text-[18px]">
                  Paint from the top down.
                </li>
                <li className="text-[18px]">
                  Use a roller on the walls.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-2">
            <div className=" flex justify-start">
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
              <div className="lg:w-96 w-full h-full">
                <Link href='/health' passHref={true}>
                  <img className="h-48 w-72" src="/images/ele.jpg" alt="" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row border-t-2 border-gray-500 lg:space-x-10 py-1 w-full">
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
              <div className="lg:w-96 w-full h-full">
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