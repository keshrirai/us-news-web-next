import { AiFillApple, AiFillFacebook } from "react-icons/ai";
import { FcGoogle, } from "react-icons/fc";

export default function forgotPassword() {
  return (
    <div className="bg-[#909090] py-10 px-2 md:px-0">

      <div className="bg-white md:w-[22.5rem] container mx-auto shadow-lg shadow-gray-700 px-3 py-4">
        <div className="py-5 pb-10">
          <img src="images/usn-logo-large.svg" className="w-[200px] flex mx-auto shadow-sm shadow-gray-500" alt="logo" />
        </div>
        <h1 className="md:text-[36px] text-[20px] text-[#3B3B3B]">Reset password</h1>
        <p className="text-[14px] py-2 text-black/80">
          Enter your Email below and we will send a <br /> message to reset your password
        </p>
        <div className="py-2">
          <input type="text" className="peer h-10 w-full rounded-md px-2 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-1 focus:ring-blue-400 focus:shadow-sm focus:shadow-blue-400 border border-gray-300 focus:border-none placeholder-gray-800" placeholder="Email" />
        </div>
        <div className="py-3">
          <button className="bg-[#C4212A] w-full text-white text-[16px] font-bold py-2 rounded-[5px]">
            Reset my password
          </button>
        </div>
      </div>
    </div>
  )
}