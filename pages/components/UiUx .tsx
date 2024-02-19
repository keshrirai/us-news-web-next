import Link from 'next/link';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from 'next/head';


export default function UiUx() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">
        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/css.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">CSS</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/html.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">HTML</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/tailwindcss.jpg" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Tailwind Css</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/javascript 1.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">JavaScript</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/java 1.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">JavaQuery</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/physics 1.png" alt="physics 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">React</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/angular.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Angular</h2>
          </div>
        </div>
      </section>
    </>
  )
}