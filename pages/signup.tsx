import { AiFillApple, AiFillFacebook } from "react-icons/ai";
import { FcGoogle, } from "react-icons/fc";

export default function signup() {
  return (
    <div className="bg-[#909090] py-10">

      <div className="bg-white w-7/12 container mx-auto shadow-lg shadow-gray-600 px-5 py-4">

        <img src="images/usn-logo-large.svg" className="w-[200px] h-[90px] flex mx-auto" alt="logo" />

        <div className="flex items-center justify-center lg:space-x-3">


          <div className="w-full">
            <h1 className="text-[16px] pb-5">Sign In with your social account</h1>

            <div className=" space-y-4">
              <div className="bg-[#000000] flex items-center space-x-5 py-[6px] px-[6px] rounded-[3px] cursor-pointer">
                <p className="text-2xl text-white">
                  < AiFillApple />
                </p>
                <p className="text-white hover:text-gray-400 text-[13px]">
                  Continue With Apple
                </p>
              </div>
              <div className="bg-[#4285F4] hover:bg-[#2d76eb] flex items-center space-x-5 py-[6px] px-[6px] rounded-[3px] cursor-pointer">
                <p className="text-2xl bg-white p-[2px]">
                  < FcGoogle />
                </p>
                <p className="text-white hover:text-gray-400 text-[13px]">
                  Continue With Google
                </p>
              </div>
              <div className="bg-[#4267B2] hover:bg-[#34579b] flex items-center space-x-5 py-[6px] px-[6px] rounded-[3px] cursor-pointer">
                <p className="text-3xl text-white">
                  < AiFillFacebook />
                </p>
                <p className="text-white hover:text-gray-400 text-[13px]">
                  Continue With Facebook
                </p>
              </div>
            </div>
            <p className="text-[11px] py-5 cursor-pointer text-gray-600">We won't post to any of your accounts without asking first</p>
          </div>

          <div className="text-gray-500">
            or
          </div>

          <div className="pt-14 w-full">
            <h1 className="text-[16px] pb-5 font-normal">Sign up with a new account</h1>
            <div>
              <h1 className="text-[14px] font-semibold py-1 text-black/80">Email</h1>
              <input className="focus:outline-none border border-gray-500/40 w-full px-2 rounded-[4px] py-[6px]" type="text" placeholder="name@host.com" />
            </div>
            <div>
              <h1 className="text-[14px] font-semibold py-1 text-black/80">Password</h1>
              <input className="focus:outline-none border border-gray-500/40 w-full px-2 rounded-[4px] py-[6px]" type="text" placeholder="Password" />
            </div>

            <div className="py-3">
              <button className="bg-[#C4212A] w-full text-white text-[16px] font-bold py-2 rounded-[5px]">
                Sign in
              </button>
            </div>
            <span className="text-[13px] flex justify-center pb-5">
              Need an account?
              <a className="text-[#4E8AC0] hover:text-gray-800 hover:underline" href="/signup">Sign up</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}