// import { CiBookmark } from "react-icons/ci";
// import { GrFacebookOption } from "react-icons/gr";
// import { FaTwitter, FaFlipboard } from "react-icons/fa";
// import { BiDotsHorizontal } from "react-icons/bi";
import Link from "next/link";

export default function business() {
  return (
    <div className="lg:w-11/12 mx-auto px-3 xl:px-0">
      <div className="container mx-auto space-y-3 md:space-y-0">
        {/* <div className="flex items-center space-x-2 2xl:w-7/12">
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
        </div> */}
        <div className="pt-8 flex flex-col lg:flex-row">
          <div>
            <img className="lg:w-[774px] lg:h-[516px]" src="/images/img1.webp" alt="" />
            <p className="lg:text-[14px] lg:w-[780px] py-3 border-b-2 break-all hover:text-blue-800">
              Saudi Energy Minister, Prince Abdulaziz bin Salman al-Saud, speaks during the fourth annual Future Investment Initiative in Riyadh, Saudi Arabia, January 27, 2021. (File photo: Reuters)
            </p>
            <p className="a1 lg:text-[20px] lg:w-[774px] text-black/80 py-5 break-all hover:text-blue-800">
              OPEC+ members leave politics out of the decision making process and out of their assessments and forecasting, Saudi energy minister Prince Abdulaziz bin Salman bin Abdulaziz said in an interview with the Saudi state news agency on Tuesday.
            </p>
            <p className="a1 lg:text-[20px] lg:w-[774px] text-black/80 py-5 break-all hover:text-blue-800">
              “As I have emphasized multiple times, in OPEC+ we leave politics out of our decision-making process, out of our assessments and forecasting, and we focus solely on market fundamentals. This enables us to assess situations in a more objective manner and with much more clarity and this in turn enhances our credibility,” Prince Abdulaziz told SPA.
            </p>
            <p className="a1 lg:text-[20px] lg:w-[774px] text-black/80 py-5 break-all hover:text-blue-800">
              He used the Ukraine crisis as an example, saying that at its start “some predicted large supply losses of more than 3 million bpd which caused panic and contributed to extreme volatilities. At that time, many accused OPEC+ of being behind the curve and not responding to a crisis in a timely manner. But these projected losses did not materialize.”
            </p>
            <section>
              <img className="flex mx-auto py-3" src="/images/add3.png" alt="" />
            </section>
            <p className="lg:text-[18px] lg:w-[774px] text-black/80 py-5 break-all hover:text-blue-800">
              Averaging across those seasons, 
              <Link href='/' passHref={true}>
                <span className="text-[#1D65D4] hover:text-black underline">weekly hospitalization rates</span>
              </Link>
               , typically reach or exceed 1.0 per 100,000 population just before the year’s end, or around MMWR week 50. They generally peak near the start of the following year, at around 5 hospitalizations per 100,000 people on average – though seasons can vary greatly in intensity. After reaching a peak, rates typically drop back down below 1.0 by about four months into the new year.
            </p>
            <p className="lg:text-[18px] lg:w-[774px] text-black/80 py-5 break-all hover:text-blue-800">
              But that’s not always the case, and this season has been a notable outlier: The weekly rate surpassed 1.0 per 100,000 by week 43, marking a much earlier rise that otherwise hasn’t occurred since the 2009-2010 season over a decade ago. For week 48 this season, or the week ending Dec. 3, the data reflects a hospitalization rate of 5.9 hospitalizations per 100,000 people. That’s down slightly from a week earlier, but still past the average historical peak and a figure about 20 times higher than this time last season, when the rate sat at 0.3. The CDC does note that the 2021-2022 flu season was extended into June due to later influenza activity.
            </p>
          </div>
          <div className="space-y-2">
            <button className="bg-[#E5E5E5] px-2 py-[2px] rounded-md border-l-8 border-[#92D3B1] mx-2 text-[22px]">
              Oil
            </button>
            <div className="space-y-2 pt-2">
              <p className="a1 break-all xl:text-[30px] font-semibold hover:text-blue-800 cursor-pointer">
                Saudi Arabia’s Energy Minister says OPEC+ leaves politics out of decisions
              </p>
            </div>
          </div>
        </div>
        <section>
        <img className="py-5 mx-auto" src="/images/add5.png" alt="" />
        </section>
        <div className="flex flex-col lg:flex-row lg:space-x-4 container mx-auto space-y-3 md:space-y-0 py-5">
          <div className="space-y-3 lg:w-[80%]">
            <div className="flex flex-col lg:flex-row border-t-2 border-gray-500 lg:space-x-10 py-1">
              <div className="space-y-3 w-full">
                <a className="a1 text-[#000000] text-xs font-bold text-[20px]" href="">The 10 Worst Presidents</a>
                <div>
                  <a className=" text-black hover:text-black/80 text-[20px] font-semibold hover:text-blue-800" href="">Not all U.S. presidents are missed once they leave the White House</a>
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
                  <a className=" text-black hover:text-black/80 text-[20px] font-semibold hover:text-blue-800" href="">Not all U.S. presidents are missed once they leave the White House</a>
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
                <a className="a1 text-[#4889f9] font-bold text-[22px] hover:text-blue-800" href="">Cartoons on President Donald Trump</a>
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
                  <a className=" text-black hover:text-blue-800 text-[20px] font-semibold" href="">Not all U.S. presidents are missed once they leave the White House</a>
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
            <div className=" flex justify-start">
              <div className="border-t-4 border-[#CD2927] w-16"></div>
            </div>
            <h1 className="text[18px] text-black font-bold">MOST POPULAR</h1>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 2xl:w-[40rem]">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC] hover:text-blue-800">1</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-800">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC] hover:text-blue-800">2</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-800">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2">
              <p className=" text-[#9297A1] hover:text-blue-800 text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC]">3</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-800">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2">
              <p className=" text-[#9297A1] text-[32px] hover:text-blue-800 font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC]">4</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-800">
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