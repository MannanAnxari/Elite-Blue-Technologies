// import { AnimatedRoutes } from '@/Components/AnimatedRoutes/Routes'; 
import Header from '@/Components/Header/Header';
import '@/styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from 'next/router';
import Loader from '@/Components/Preloader/Loader';
import Script from 'next/script';
import Footer from '@/Components/Footer/Footer';
import Home from '@/Components/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  const location = useRouter();
  const [progress, setProgress] = useState(false)
  const [prevLoc, setPrevLoc] = useState("")

  useEffect(() => {
    setPrevLoc(location.pathname)
    setProgress(true)
    if (location.pathname === prevLoc) {
      setPrevLoc('')
    }
  }, [location])

  useEffect(() => {
    setTimeout(
      () => setProgress(false)
      , 900)
  }, [prevLoc])



  return <>

    {/* <AppContext.Provider value={values}> */}
    <motion.div className="progress-bar" style={{ scaleX }} />
    <Home />
    <Header />
    <Toaster position="top-right" />
    {progress && <Loader />}
    <Component {...pageProps} />
    <Footer />
    {/* </AppContext.Provider> */}
    <Script src="/jQuery.js"></Script>
    <Script strategy='lazyOnload' src="/mixitup.js"></Script>
    <Script src="/bs.js"></Script>
    <Script src="/isotope.js"></Script>
    <Script strategy='lazyOnload' src="/main.js" ></Script>
  </>
}
