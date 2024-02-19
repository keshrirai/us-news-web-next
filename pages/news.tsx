import Link from "next/link";

export default function news() {



  const Process = [
    {
      num: '1',
      img: '/images/gettyimages-1303556647.jpg',
      url: 'health',
      title: 'HEALTHIEST COMMUNITIES HEALTH NEWS',
      decs: 'Hospitalization data points to how the flu season is kicking into high gear much earlier than in seasons past.'
    },
    {
      num: '2',
      img: '/images/gettyimages-1303556647.jpg',
      url: 'Web-development',
      title: 'HEALTHIEST COMMUNITIES HEALTH NEWS',
      decs: 'Hospitalization data points to how the flu season is kicking into high gear much earlier than in seasons past.'
    },
    {
      num: '3',
      img: '/images/gettyimages-1303556647.jpg',
      url: 'web-design',
      title: 'HEALTHIEST COMMUNITIES HEALTH NEWS',
      decs: 'Hospitalization data points to how the flu season is kicking into high gear much earlier than in seasons past.'
    },
  ]


  return (
    <div className="lg:w-11/12 mx-auto px-3 xl:px-0">
      <ul className="container mx-auto divide-y divide-gray-400 divide-dotted" style={{ fontFamily: 'Raleway' }}>
        <li className="flex items-center justify-between">
          <div className="flex flex-col lg:flex-row w-full space-x-4">

            <div className='lg:pt-14 pt-2 order-2 lg:-order-3'>
              <div className='border lg:w-[18rem] w-full'>
                <a href="/health">
                  <h1 className='text-black text-[1rem] font-semibold py-2 text-center border-t-4 border-[#CE2927]'>TOP STORIES</h1>
                  <div className='p-3 border-t'>
                    <h1 className='text-black hover:text-black/70 cursor-pointer font-semibold text-[1.25rem]'>House Votes to Release Trump's Taxes</h1>
                    <p className='text-black/70 break-all text-[0.875rem] hover:text-blue-600'>
                      The House Ways and Means Committee voted on Tuesday to release redacted versions of former President Donald Trump’s tax returns to the full House.
                    </p>
                    <p className='text-black hover:text-blue-600 text-[0.75rem] font-bold pt-5'>Kaia Hubbard</p>
                  </div>
                </a>
              </div>
              <div className='border lg:w-[18rem] w-full'>
                <div className='p-3'>
                  <a href="/Bathroom">
                    <h1 className='text-black hover:text-black/70 cursor-pointer font-semibold text-[1.25rem]'>Jan. 6, Trump and DOJ: What Next?</h1>
                    <p className='text-black/70 break-all text-[0.875rem] hover:text-blue-600'>
                      The Justice Department has no mandate to act on referrals from the Jan. 6 committee but is seeking the evidence behind them as it conducts its own investigation into the former president.
                    </p>
                    <p className='text-black text-[0.75rem] font-bold pt-5 hover:text-blue-600'>Claire Hansen</p>
                  </a>

                  <div className=' space-y-3 py-2 pt-10 pb-4'>
                    <div className='flex space-x-2 cursor-pointer'>
                      <img className='h-12 w-12 object-cover rounded-lg' src="/images/trump.jpg" alt="" />
                      <p className='text-black/80 hover:text-blue-600'>
                        GOP Warns Against Release of Trump Taxes</p>
                    </div>
                    <div className='flex space-x-2 cursor-pointer'>
                      <img className='h-12 w-12 object-cover rounded-lg' src="/images/trump.jpg" alt="" />
                      <p className='text-black/80 hover:text-blue-600'>
                        GOP Warns Against Release of Trump Taxes</p>
                    </div>
                    <div className='flex space-x-2 cursor-pointer'>
                      <img className='h-12 w-12 object-cover rounded-lg' src="/images/trump.jpg" alt="" />
                      <p className='text-black/80 hover:text-blue-600'>
                        GOP Warns Against Release of Trump Taxes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/health" className='lg:pt-5 pt-2 order-1 lg:-order-2'>
              <div className="bg-cover bg-no-repeat bg-right h-[440px] group cursor-pointer relative" style={{ backgroundImage: `url("/images/news.jpg")` }}>
                <div className="">
                  <div className=" absolute position bottom-36 lg:bottom-[8rem] xl:bottom-24 pl-3">

                    <h1 className="lg:text-[18px] text-white">WORLD REPORT</h1>
                    <h1 className="text-white lg:text-[32px] text-[28px] font-bold">
                      Benedict Death <br /> Paves Way <br /> for Protocols
                    </h1>

                  </div>
                  <div className="absolute position bottom-0 px-3 bg-[#3F4451] w-full py-3 text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea facilis  sit ipsam nostrum aperiam, quam tenetur illo repellat impedit dignissimos nihil  hic iste obcaecati voluptatem quisquam quaerat repudiandae recusandae minima.
                  </div>
                </div>

                <div className="group-hover:bg-gradient-to-t from-black/50 to-black/20 transition duration-300 absolute top-0 left-0 w-full h-full">
                </div>
              </div>
              <div className="py-2 grid grid-cols-1 gap-4">
                <div className="py-2 space-y-2 border border-gray-300 text-center px-5 cursor-pointer">
                  <h1 className="text-[12px] text-gray-500 font-bold text-center hover:text-blue-600">NATIONl NEWS</h1>
                  <h1 className="text-[20px] font-bold hover:text-blue-600 text-black">Santos Confession Doesn’t Quiet Calls to step Dowin</h1>
                  <p className="text-[14px] text-gray-700 font-semibold break-all hover:text-blue-600">The disgraced politician hasn’t even taken office, but he’s facing an overwhelming wave of calls for his resignation after he admitted to a pattern of lying about virtually every aspect of his life.
                  </p>
                </div>
                <div className="py-2 space-y-2 border border-gray-300 text-center px-5 cursor-pointer">
                  <h1 className="text-[12px] text-gray-500 font-bold text-center hover:text-blue-600">NATIONl NEWS</h1>
                  <h1 className="text-[20px] font-bold hover:text-blue-600 text-black">Santos Confession Doesn’t Quiet Calls to step Dowin</h1>
                  <p className="text-[14px] text-gray-700 font-semibold break-all hover:text-blue-600">The disgraced politician hasn’t even taken office, but he’s facing an overwhelming wave of calls for his resignation after he admitted to a pattern of lying about virtually every aspect of his life.
                  </p>
                </div>
              </div>
            </a>
            <div className='pt-14 order-3 lg:-order-1 '>
              <div className='border lg:w-[18rem] w-full'>
                <h1 className='text-black text-[1rem] font-semibold py-2 text-center border-t-4 border-[#CE2927] hover:text-blue-600'>RANKINGS & ADVICE</h1>
                <div className='p-3 border-t'>
                  <a href="/Bathroom">
                    <h1 className='text-black hover:text-black/70 cursor-pointer font-semibold text-[1.25rem] hover:text-blue-600'>Annual Credit Card Awards</h1>
                    <img src="/images/card.webp" alt="" />
                    <p className='text-black/70 break-all text-[0.875rem] hover:text-blue-600'>
                      Don't miss our winners for the best cards in these categories: 0% introductory APR, airline, balance transfer, business, cash back, rewards, student and travel.
                    </p>
                  </a>
                </div>
              </div>
              <div className='border lg:w-[18rem] w-full'>
                <div className='p-3'>
                  <a href="/health">
                    <h1 className='text-black hover:text-black/70 cursor-pointer font-semibold text-[1.25rem]'>What to Watch When Interest Rates Rise</h1>
                  </a>
                  <p className='text-black/70 break-all text-md'>
                    What to Watch When Interest Rates Rise
                  </p>
                  <div className='space-y-3'>
                    <a href="/health"><p className='text-black/80 text-md hover:text-blue-600 pt-2'>7 Best Water Stocks and ETFs to Buy</p></a>
                    <a href="/health"><p className='text-black/80 text-md hover:text-blue-600'>7 Best Water Stocks and ETFs to Buy</p></a>
                    <a href="/health"><p className='text-black/80 text-md hover:text-blue-600'>7 Best Water Stocks and ETFs to Buy</p></a>
                  </div>
                </div>
                <section className="pb-3 py-5">
                  <img className="h-44 w-44 mx-auto" src="/images/add4.png" alt="" />
                </section>
              </div>
            </div>

          </div>
        </li>
      </ul>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-5 container mx-auto space-y-3 md:space-y-0 border-b-2">
        <div className="space-y-2">
          <a href="/business">
            <img className=" rounded-lg" src="/images/img1.webp" alt="" />
          </a>
          <div className="space-y-2 pt-2">
            <a href="/business">
              <p className=" break-all text-xl font-semibold">
                <button className="bg-[#E5E5E5] px-3 py-1 rounded-md border-l-8 border-[#92D3B1] mx-2 hover:text-black/70">
                  Oil
                </button>
                <span className="hover:text-blue-600">
                  Saudi Arabia’s Energy Minister says OPEC+ leaves politics out of decisions
                </span>
              </p>
            </a>
          </div>
        </div>
        <div className="space-y-2">
          <a href="/business">
            <img className=" rounded-lg" src="/images/img2.webp" alt="" />
          </a>
          <div className="space-y-2 pt-2">
            <p className=" break-all font-semibold text-lg">
              <button className="bg-[#E5E5E5] px-3 py-1 rounded-md border-l-8 border-[#8A8E9A] mx-2 hover:text-black/70">
                Iran nuclear deal
              </button>
              <span className="hover:text-blue-600 cursor-pointer">
                Video shows Biden saying Iran nuclear deal is ‘dead’
              </span>
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <a href="/business">
            <img className=" rounded-lg" src="/images/img3.webp" alt="" />
          </a>
          <div className="space-y-2 pt-2">
            <p className=" break-all font-semibold text-lg">
              <button className="bg-[#E5E5E5] px-3 py-1 rounded-md border-l-8 border-[#8A8E9A] mx-2 hover:text-black/70">
                Terrorism
              </button>
              <span className="hover:text-blue-600 cursor-pointer">
                US military carries out three raids against ISIS in Syria, detains senior member
              </span>
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <a href="/business">
            <img className=" rounded-lg" src="/images/img4.webp" alt="" />
          </a>
          <div className="space-y-2 pt-2">
            <p className=" break-all font-semibold text-lg">
              <span className="hover:text-blue-600 cursor-pointer">
                Saudi Arabia’s King, Crown Prince congratulate Qatar for successful World Cup
              </span>
            </p>
          </div>
        </div>
      </div>

      <section>
        <img className="flex mx-auto py-3" src="/images/add.png" alt="" />
      </section>

      <div className="flex flex-col lg:flex-row lg:space-x-4 container mx-auto space-y-3 md:space-y-0 py-5">
        <div className="">
          <section className="">
            {/* text-section */}
            <div className=" space-y-3">
              {
                Process.map((elem) => {
                  const { title, img, decs, url } = elem;
                  return (
                    <div className="bg-white p-1 cursor-pointer border flex flex-col-reverse lg:flex-row" >
                      <div className="py-3">
                        <h1 className="text-[12px] font-semibold text-red-600 hover:text-blue-600">{title}</h1>
                        <h1 className="text-[20px] font-semibold hover:text-blue-600">{title}</h1>
                        <p className="text-[#707482] text-[14px]">{decs}</p>

                        <p className="text-[12px] text-[#878A96] pt-10">
                          <b className="text-[#000000]">Christopher Wolf</b> Dec. 9, 2022
                        </p>
                      </div>
                      <a href="/health" className="group cursor-pointer relative">
                        <img className="h-48 w-72 object-cover" src={img} height={64} width={64} alt="What We Offer" title='What We Offer' />
                        <div className="group-hover:bg-black/20 transition duration-200 absolute top-0 left-0 w-full h-full">
                        </div>
                      </a>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </div>

        <div className="space-y-2">
          <div className=" flex justify-center lg:justify-start">
            <div className="border-t-4 border-[#CD2927] w-16"></div>
          </div>
          <h1 className="text[18px] text-black font-bold">MOST POPULAR</h1>
          <div className="space-y-2">

            <span className="border border-[#D3D7DC] flex items-center space-x-2 2xl:w-[40rem] cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC] hover:text-blue-600">1</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit hover:text-blue-600 border-r border-[#D3D7DC]">2</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit hover:text-blue-600 border-r border-[#D3D7DC]">3</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit hover:text-blue-600 border-r border-[#D3D7DC]">4</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit hover:text-blue-600 border-r border-[#D3D7DC]">5</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit hover:text-blue-600 border-r border-[#D3D7DC]">6</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit hover:text-blue-600 border-r border-[#D3D7DC]">7</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
            <span className="border border-[#D3D7DC] flex items-center space-x-2 cursor-pointer">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit hover:text-blue-600 border-r border-[#D3D7DC]">8</p>
              <p className="text-[14px] text-[#272A33] hover:text-blue-600">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>
          </div>
        </div>
      </div>
      <section>
        <img className="py-5 mx-auto" src="/images/add2.jpeg" alt="" />
      </section>
      <div className=" container mx-auto">
        <div className=" pb-2 flex  justify-center lg:justify-start">
          <div className="border-t-4 border-[#CD2927] w-16"></div>
        </div>
        <h1 className="text-2xl font-bold text-center lg:text-left">PHOTO GALLERIES</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-3 items-center container mx-auto space-y-3 lg:space-y-0 py-2">
        <div>
          <img className="w-[40rem] 2xl:h-[56rem]" src="/images/Photos.jpeg" alt="" />
        </div>
        <div className="space-y-5">
          <img className="lg:w-[20rem] w-[55rem] 2xl:w-[40rem]" src="/images/History.jpeg" alt="" />
          <img className="lg:w-[20rem] w-[55rem] 2xl:w-[40rem]" src="/images/History.jpeg" alt="" />
        </div>
      </div>
      <div className="pt-5 space-y-6 container mx-auto pb-6">
        <div className="border-t border-gray-300"></div>
        <div className="border-t border-gray-300"></div>
      </div>
      <div className="flex  items-center justify-between container mx-auto py-4 border-t-[3px] border-black">
        <div className="flex items-center space-x-5">
          <div>
            <Link href='/' passHref={true}>
              <h1 className="text-black font-bold text-lg">EDUCATION » </h1>
            </Link>
          </div>
          <div className="lg:flex hidden space-x-4">
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Colleges</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Grad Schools</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm"> Online Colleges</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm"> Global Universities</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm"> K-12 Schools</h1>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link href='/' passHref={true}>
              <h1 className="text-black text-xs font-bold">
                SEE ALL EDUCATION »</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 gap-5 container mx-auto">
        <div className=' space-y-3 py-2 pt-10 col-span-2 h-fit'>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/College.jpg" alt="" />
            <p className='text-black/80 text-sm hover:text-blue-600'>
              How to Write a College Essay</p>
          </div>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/College.jpg" alt="" />
            <p className='text-black/80 text-sm hover:text-blue-600'>
              How to Write a College Essay</p>
          </div>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/College.jpg" alt="" />
            <p className='text-black/80 text-sm hover:text-blue-600'>
              How to Write a College Essay</p>
          </div>
        </div>
        <div className=" border hover:shadow-md hover:shadow-gray-500 transition duration-300  bg-white w-fit h-fit flex flex-col lg:flex-row items-center col-span-4 space-x-4">
          <div>
            <a href="/Students">
              <img className="h-[17rem]" src="/images/Traveling.jpg" alt="" />
            </a>
          </div>
          <div className="py-5 lg:py-0 cursor-pointer">
            <p className="text-2xl font-bold hover:text-blue-600">
              How a Gap Year
            </p>
            <p className="text-sm text-black/70 hover:text-blue-600">
              More students are taking a year off after high school to explore their interests.
            </p>
            <p className="text-xs pt-5 hover:text-blue-600">
              <b> By Cole Claybourn</b> Nov. 29, 2022,
            </p>
          </div>
        </div>
        <div className="border rounded-t col-span-2 h-fit w-full mx-auto pb-5 cursor-pointer">
          <div className="bg-[#F4F7F9] border-b-2 border-gray-400">
            <div className=" -translate-y-5 flex justify-center">
              <img className="h-20 w-20" src="/images/badge-best-gold.svg" alt="" />
            </div>
            <div>
              <p className="text-lg font-bold text-center hover:text-blue-600">Education Rankings</p>
            </div>
          </div>
          <div className="bg-[#ffffff] px-5 space-y-4 pt-5 cursor-pointer">
            <div className="flex  justify-between">
              <div>
                <p className="text-sm text-black/70 hover:text-blue-600">Colleges</p>
                <p className="text-sm text-black/70 hover:text-blue-600">Grad Schools</p>
                <p className="text-sm text-black/70 hover:text-blue-600">K-12 Schools</p>
              </div>
              <div className="cursor-pointer">
                <p className="text-sm text-black/70 hover:text-blue-600">Global Universities</p>
                <p className="text-sm text-black/70 hover:text-blue-600">Online Programs</p>
              </div>
            </div>
            <p className="text-black font-bold text-xs hover:text-blue-600">SEE ALL EDUCATION RANKINGS »</p>
            <p className="text-black font-bold text-xs hover:text-blue-600">SEE ALL EDUCATION RANKINGS »</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between container mx-auto py-4 border-t-[3px] border-black mt-5">
        <div className="flex items-center space-x-5">
          <div>
            <Link href='/' passHref={true}>
              <h1 className="text-black font-bold text-lg">HEALTH » </h1>
            </Link>
          </div>
          <div className="lg:flex hidden space-x-4">
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Hospitals</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Doctors</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Senior Care</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Diets & Wellness</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Health Insurance</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Conditions</h1>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link href='/' passHref={true}>
              <h1 className="text-black text-xs font-bold">
                SEE ALL HEALTH »</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 gap-5 container mx-auto">
        <div className=' space-y-3 py-2 pt-10 col-span-2 h-fit'>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/healthcare_0.jpg" alt="" />
            <p className='text-black/80 text-sm'>
              U.S. News Best Medicare Plans</p>
          </div>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/healthcare_0.jpg" alt="" />
            <p className='text-black/80 text-sm'>
              U.S. News Best Medicare Plans</p>
          </div>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/healthcare_0.jpg" alt="" />
            <p className='text-black/80 text-sm'>
              U.S. News Best Medicare Plans</p>
          </div>
        </div>
        <div className=" border hover:shadow-md hover:shadow-gray-500 transition duration-300 bg-white w-fit h-fit flex flex-col lg:flex-row items-center col-span-4 space-x-4">
          <div>
            <a href="/Students">
              <img className="h-[17rem]" src="/images/Medicare.webp" alt="" />
            </a>
          </div>
          <div className="py-5 lg:py-0">
            <p className="text-2xl font-bold">
              Best Medicare Advantage Plan
            </p>
            <p className="text-sm text-black/70">
              U.S. News analyzed insurance companies’ Medicare Advantage plans in each state based on their 2023 CMS star ratings
            </p>
            <p className="text-xs pt-5">
              <b> By Cole Claybourn</b> Nov. 29, 2022,
            </p>
          </div>
        </div>
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
      <div className="flex  items-center justify-between container mx-auto py-4 border-t-[3px] border-black mt-5">
        <div className="flex items-center space-x-5">
          <div>
            <Link href='/' passHref={true}>
              <h1 className="text-black font-bold text-lg">MONEY » </h1>
            </Link>
          </div>
          <div className="lg:flex hidden space-x-4">
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Investing</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Retirement</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Personal Finance</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Careers</h1>
              </Link>
            </div>
            <div>
              <Link href='/' passHref={true}>
                <h1 className="text-black/90 text-sm">Real Estate</h1>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Link href='/' passHref={true}>
              <h1 className="text-black text-xs font-bold">
                SEE ALL MONEY »</h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 gap-5 container mx-auto">
        <div className=' space-y-3 py-2 pt-10 col-span-2 h-fit'>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/money.webp" alt="" />
            <p className='text-black/80 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/money.webp" alt="" />
            <p className='text-black/80 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex space-y-3 lg:space-y-0 space-x-2 cursor-pointer items-center'>
            <img className='h-20 w-20 object-cover rounded-lg' src="/images/money.webp" alt="" />
            <p className='text-black/80 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className=" border hover:shadow-md hover:shadow-gray-500 transition duration-300 bg-white w-fit h-fit flex flex-col lg:flex-row items-center col-span-4 space-x-4">
          <div>
            <a href="/Students">
              <img className="h-[17rem]" src="/images/money.webp" alt="" />
            </a>
          </div>
          <div className="py-5 lg:py-0">
            <p className="text-2xl font-bold">
              7 Best Cheap stock to buy Now Under $5
            </p>
            <p className="text-sm text-black/70">
              7 Best Cheap stock to buy Now Under $5
            </p>
            <p className="text-xs pt-5">
              <b> By Cole Claybourn</b> Nov. 29, 2022,
            </p>
          </div>
        </div>
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
            <div className="flex justify-between">
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
      <section>
        <div>
          <img className="py-5 mx-auto" src="/images/add2.jpeg" alt="" />
        </div>
      </section>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto py-5">
        <div className="space-y-3 p-2 border-2">
          <h1 className="text-xs font-bold text-red-600">WORLD</h1>
          <p className="text-black/90">
            Putin Promises to Meet All of Russian Army's Needs for Ukraine
          </p>
          <p className="text-black/90">
            Syria's Assad Issues Conditional Amnesty for Draft Dodgers
          </p>
          <p className="text-black/90">
            Putin Says No Limit on Financial Support for Russia's Armed Forces
          </p>
        </div>
        <div className="space-y-3 p-2 border-2">
          <h1 className="text-xs font-bold text-red-600">POLITICS</h1>
          <p className="text-black/90">
            Zelenskyy to Meet Biden, Address Congress as War Rages On
          </p>
          <p className="text-black/90">
            EXPLAINER: How Trump Ignored Advisers, Spread Election Lies
          </p>
          <p className="text-black/90">
            Arizona Judge to Consider Kari Lake's Stolen Election Claims
          </p>
        </div>
        <div className="space-y-3 p-2 border-2">
          <h1 className="text-xs font-bold text-red-600">BUSINESS</h1>
          <p className="text-black/90">
            World Shares Mostly Higher After Slight Gains on Wall St
          </p>
          <p className="text-black/90">
            Storm Adds Uncertainty to Strong Holiday Travel Demand
          </p>
          <p className="text-black/90">
            Musk Says He'll Be Twitter CEO Until a Replacement Is Found
          </p>
        </div>
      </div>
      <section>
        <div>
          <img className="py-5 mx-auto" src="/images/add2.jpeg" alt="" />
        </div>
      </section>
      <div className="flex flex-col lg:flex-row lg:space-x-4 container mx-auto space-y-3 md:space-y-0 py-5">
        <div className="space-y-3 lg:w-[80%] w-full">
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
            <div className="lg:w-96 w-full h-full">
              <Link href='/health' passHref={true}>
                <img className="h-48 w-72" src="/images/presidents.jpg" alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <section>
            <img className=" pb-5 mx-auto" src="/images/add5.png" alt="" />
          </section>

          <div className="space-y-2 xl:pt-40">

            <div className=" flex lg:justify-start">
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
            <span className="border border-[#D3D7DC] flex items-center space-x-2">
              <p className=" text-[#9297A1] text-[32px] font-bold bg-[#F4F7F9] px-2 py-2 w-fit border-r border-[#D3D7DC]">5</p>
              <p className="text-[14px] text-[#272A33]">
                Star Rising in Kremlin, Russia's Medvedev Predicts War in West</p>
            </span>

          </div>

        </div>
      </div>
      <section>
        <img className="py-5 mx-auto" src="/images/add6.png" alt="" />
      </section>
    </div>
  )
}