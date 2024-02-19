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
              <img src="images/nodejs.svg" alt="nodejs" className=" w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Nodejs</h2>
          </div>
          <div className=" rounded-lg space-y-3 border ">
            <div className="items-center justify-center pt-4">
              <img src="images/img/sails.svg" alt="sail" className=" w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Sails js</h2>
          </div>

          <div className=" rounded-lg space-y-3 border ">
            <div className="items-center justify-center pt-4">
              <img src="images/loopback.svg" alt="loopback" className=" w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">LoopBack</h2>
          </div>

          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/angular.png" alt="angular.js" className=" w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Angular</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/express.png" alt="express" className=" mx-auto" width={184} height={115} />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Express</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/java 1.png" alt="java" className=" mx-auto" width={123} height={84} />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Java</h2>
          </div>

          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/java-php 1.png" alt="sail" className="  mx-auto" width={87} height={100} />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">PHP</h2>
          </div>

          <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className=" rounded-lg space-y-3 border ">
            <div className="items-center justify-center pt-4">
              <img src="images/python 1.png" alt="sail" className=" w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Python</h2>
          </div>

          <div data-aos="flip-right" data-aos-delay="50" data-aos-duration="2000" className=" rounded-lg space-y-3 border ">
            <div className="items-center justify-center pt-4">
              <img src="images/img/ruby.webp" alt="sail" className=" w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Ruby</h2>
          </div>



        </div>
      </section>
    </>
  )
}
