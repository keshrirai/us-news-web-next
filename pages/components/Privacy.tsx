import Link from 'next/link';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from 'next/head';
import Main from './Footer';
import Header from './Header';

export default function Home() {
  return (
    <>
      <div className="bg-white text-left   space-y-4   h-screen lang overflow-y-auto p-4 flex-1">
        <h1 className="text-2xl font-semibold"> Privacy Policy</h1>
        <p>This privacy policy will help you understand how Comfygen uses and protects the data you provide to us when you visit and use www.comfygen.com
        </p>
        <p>We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
        </p>

        <h1 className="text-2xl font-semibold">What User Data We Collect</h1>
        <p>When you visit the website, we may collect the following data:</p>
        <p>·         Your IP address.</p>
        <p>·         Your contact information and email address.</p>
        <p>·         Other information such as interests and preferences.</p>
        <p>·         Data profile regarding your online behaviour on our website.</p>

        <h1 className="text-2xl font-semibold">Safeguarding and Securing the Data</h1>
        <p>Comfygen is committed to securing your data and keeping it confidential. Comfygen has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
        </p>

        <h1 className="text-2xl font-semibold">Our Cookie Policy</h1>
        <p>Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behaviour (analyze web traffic, web pages you spend the most time on, and websites you visit).
        </p>
        <p>The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.
        </p>
        <p>Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.
        </p>
        <p>If you want to disable cookies, you can do it by accessing the settings of your internet browser.
        </p>

        <h1 className="text-2xl font-semibold">Third Party Links or Websites</h1>
        <p>Sometimes, we may include links to the third parties on the website. This inclusion of links does not mean that www.comfygen.com endorses the site's policy towards the visitor's privacy. Visiting those websites is not governed by this privacy policy agreement. While landing on a site that is linked to our website, do review their privacy policy before sending the visitors any personal data.
        </p>

        <h1 className="text-2xl font-semibold ">Restricting the Collection of your Personal Data</h1>
        <p>At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:
        </p>
        <p>When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.
        </p>
        <p>If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.
        </p>

        <h1>Do We Share Your Personal Data and Information?</h1>
        <p>Comfygen will not lease, sell or distribute your personal information to any third parties under any circumstances, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.
        </p>

      </div>
    </>
  )
}
