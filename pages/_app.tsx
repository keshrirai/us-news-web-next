import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { useState } from 'react';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
function MyApp({ Component, pageProps }: AppProps) {

  const [openSidebar, SetSidebar] = useState(false);
  return <main className={`${inter.variable} font-sans`}>
    <Header
      openSidebar={openSidebar}
      SetSidebar={SetSidebar}
    />

    <Component {...pageProps} />
    <Footer />

    {openSidebar ?
      <Menu
        openSidebar={openSidebar}
        SetSidebar={SetSidebar}
      />
      : null}

  </main>
}
export default MyApp