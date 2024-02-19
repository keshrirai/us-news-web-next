import Link from 'next/link';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from 'next/head';
// import Main from './components/Footer';
// import Header from './components/Header';

export default function Home() {
  return (
    <>
      <section className="md:space-y-0 space-y-10 items-center ">

        <div className=" grid lg:grid-cols-6 md:grid-cols-5 grid-cols-3 lg:gap-10 gap-6">

          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/mysql.svg" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">MySql</h2>
          </div>

          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/mongodb.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">MongoDB</h2>
          </div>

          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/redis.webp" alt="apple 1" className="lg:w-auto w-14 h-14 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Redis</h2>
          </div>

          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/sql-server.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Microsoft SQL Server</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/orcale.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">Oracle Database</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/Database-postgres.png" alt="apple 1" className="lg:w-auto w-12 h-12 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">PostgreSQL</h2>
          </div>
          <div className=" rounded-lg space-y-3 border">
            <div className="items-center justify-center pt-4">
              <img src="images/sqllite.png" alt="apple 1" className="lg:w-auto w-14 h-14 mx-auto" />
            </div>
            <h2 className="md:text-lg text-base font-medium text-center pb-3">SQLite</h2>
          </div>
        </div>
      </section>

    </>
  )
}
