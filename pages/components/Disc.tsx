import Link from 'next/link';
import Image from 'next/image';
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Head from 'next/head';
// import Main from './components/Footer';
// import Header from './components/Header';

export default function Home() {
  return (
    <>
       <div className="bg-white text-left   space-y-4   h-screen lang overflow-y-auto p-4 flex-1">
            <h1 className="text-2xl font-semibold"> Disclaimer</h1>
            <p>Last updated: April 26, 2022</p>

            <h1 className="text-2xl font-semibold">Interpretation and Definitions</h1>
            {/* <h1 className="text-2xl font-semibold"></h1> */}
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>

            <h1 className="text-2xl font-semibold text-black">Definitions</h1>
            <p className='text-black'>For the purposes of this Disclaimer:</p>


            <p className='text-black'>Company (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Comfygen Private Limited, 70, A Narayanpuri Jhotwara, Jaipur, Rajasthan, INDIA, 302012.
            </p>
            <p className='text-black'>Service refers to the Website.</p>
            <p className='text-black'>You means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
            </p>
            <p className='text-black'>Website refers to comfygen, accessible from https://www.comfygen.com/</p>

            <h1 className="text-2xl font-semibold 'text-black">
               Disclaimer
            </h1>
            <p className='text-black'>The information contained on the Service is for general information purposes only.</p>

            <p className='text-black'>The Company assumes no responsibility for errors or omissions in the contents of the Service.</p>

            <p className='text-black'>In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the Disclaimer Template.
            </p>
            <p className='text-black'>The Company does not warrant that the Service is free of viruses or other harmful components.
            </p>

            <h1 className="text-2xl font-semibold">External Links Disclaimer</h1>
            <p className='text-black'>The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
            </p>
            <p className='text-black'>Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
            <h1>Errors and Omissions Disclaimer</h1>
            <p className='text-black'>The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
            </p>
            <p className='text-black'>The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>

            <h1 className="text-2xl font-semibold">Fair Use Disclaimer</h1>
            <p>The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
            <p className='text-black'>The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
            </p>
            <p>If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
            </p>
            <h1 className="text-2xl font-semibold"> Views Expressed Disclaimer</h1>
            <p>The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.
            </p>
            <p>Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
            </p>

            <h1 className="text-2xl font-semibold">No Responsibility Disclaimer</h1>
            <p className='text-black'>The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.
            </p>
            <p className='text-black'>In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.
            </p>
            <h1 className="text-2xl font-semibold">"Use at Your Own Risk" Disclaimer</h1>
            <p className='text-black'>All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
            </p>
            <p className='text-black'>The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.
            </p>

            <h1 className="text-xl font-semibold">Contact Us</h1>
            <p className='text-black'>If you have any questions about these Terms and Conditions, You can contact us:</p>

            <p className='text-black'>By email: sales@comfygen.com</p>
            <p className='text-black'>
               By visiting this page on our website: https://www.comfygen.com/contact</p>

            <p className='text-black'>By phone number: 9587867258</p>
         </div>
    </>
  )
}
