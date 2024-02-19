import Link from 'next/link';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from 'next/head';
import Main from './Footer';
import Header from './Header';





export default function Home() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">

        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">

          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/img/android 1.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Android</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/React-icon.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">React Native</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/apple 1.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">iOS</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/Xamarin.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-basefont-medium text-center pb-3">Xamarin</h2>
          </div>
        </div>
      </section>
    </>
  )
}
