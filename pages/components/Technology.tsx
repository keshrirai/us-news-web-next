import Link from 'next/link';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">

        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/blockchaini.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center text-black pb-3">Blockchain</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/mern-stack.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center text-black pb-3">Mern Stack</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/magento.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center text-black pb-3">Magneto</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/microsoft.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-basefont-medium text-center text-black pb-3">Microsoft Dynamic 365</h2>
          </div>

        </div>
      </section>
    </>
  )
}
