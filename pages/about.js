import React from 'react';
import { motion } from 'framer-motion';
import AboutImg from '@/public/Assets/About/home.png';
import WhoWeAre from '@/public/Assets/About/who-we-are.png';
import AboutSec from '@/public/Assets/About/sec-2-vector.png';
import Link from 'next/link';
import Team from '@/Components/Team/Team';
import Image from 'next/image';
import Head from 'next/head';

const About = ({ title, metaKeywords, metaTitle, metaDescription }) => {
  return (
    <>
      <Head>
        <meta name="title" content={`${metaTitle}`} />
        <meta name="keywords" content={`${metaKeywords}`} />
        <meta name="description" content={`${metaDescription}`} />
        <link rel="canonical" href={!(typeof window === 'undefined') && window.location.href} />
        <meta property="og:site_name" content="Elite Blue Technologies" />
        <meta property="og:url" content={!(typeof window === 'undefined') && window.location.href} />
        <meta property="og:title" content={`${metaTitle}`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={`${metaDescription}`} />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:title" content={`${metaTitle}`} />
        <meta name="twitter:description" content={`${metaDescription}`} />
        <title>{title}</title>
      </Head>
      {/* <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}> */}
      {/* <motion.div initial={{ width: 0, opacity: 0, x: 100 }} animate={{ width: "100%", opacity: 1, x: 0 }} exit={{ width: window.innerWidth, transition: { duration: 0.2 }, opacity: 0, x: 100 }}> */}
      <section className="section about-section position-relative overflow-hidden w-100">
        <div className="container">
          <div className="circle"></div>
          <div className="circle circle-1"></div>
          <div className="row ">
            <div className="col-lg-6 col-12 my-auto">
              <div className="inner">
                <div className="head">
                  {/*<h4 className='heading-sm text-white'>About</h4>*/}
                  <h2 className='heading text-white'>Elite Blue - fastest growing Digital agency<span className="dot">.</span></h2>
                  {/*<h2 className='heading text-white'>One of the fastest growing agency<span className="dot">.</span></h2>*/}
                  {/*<p className="para text-white">we design and develop web and mobile applications for our clients worldwide</p>*/}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <Image src={AboutImg} alt="About" draggable="false" className='aboutimg w-100 h-100' />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="circle"></div>
          <div className="circle circle-1"></div>
          <div className="row ">
            <div className="col-lg-6 col-12 my-md-auto my-3">
              <Image src={WhoWeAre} alt="About" draggable="false" className='aboutimg w-100 h-auto' />
            </div>
            <div className="col-lg-6 col-12 my-auto">
              <div className="inner">
                <div className="head">
                  <h4 className='heading-sm'><span>Get to know Elite Blue</span></h4>
                  <h2 className='heading heading-h'>
                    We are Committed to taking your Brand to New Heights of Success<span className="dot">.</span></h2>
                  <p className="para">
                    With the advent of the internet, a good chunk of commerce has shifted online. This means that most of your target market can be found online, and though this provides businesses easy access, you have to become even more agile in the sources you use to get to them. With the influx of websites and applications popping up all over various online platforms, you want to make sure that your brand stands out in a manner that has the customer returning.                    <br /><br />

                    We at Elite Blue have been able to crack the code of what makes the user want to stick around on an application and think of the brand when they want the product or service you offer again. We have developed a secret ingredient list of what a brand can do to leave a lasting impression in the minds of its website visitors. It is a carefully crafted amalgamation of an attractive and easy-to-use web interface, smooth operations behind the scenes, and competitive digital marketing tactics.                    <br /><br />

                    Not only that, even after publishing your website we are consistently working to update the site and processes in order to match the changing rules and preferences of the industry. Digital Auxilius ensures that its experts are vigilant in learning the newer skills erupting within the market, and immediately implementing them on the clients’ website. Despite the changing weathers of the industry, we will make sure that when it comes to the digital aspect of your business you will never go obsolete.
                  </p>
                  {/* <Button link="" text="Read more" type="light" /> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="services what-we-do section bg-white">
        <div className="container">
          <div className="row">

            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="inner">
                <div className="sec-title">
                  <h2 className='heading'>We Shape the Perfect <br />Solutions<span className="dot">.</span></h2>
                </div>
              </div>
            </div>

            <div className="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-sec" count="01">
                <div className="bottom-curve"></div>
                <div className="icon-box"><span className="flaticon-responsive"></span></div>
                <h6><Link href="/service/web-development">Website <br />Development</Link></h6>
              </div>
            </div>

            <div className="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-sec" count="02">
                <div className="bottom-curve"></div>
                <div className="icon-box"><span className="flaticon-computer"></span></div>
                <h6><Link href="/service/branding-and-designing">graphic <br />designing</Link></h6>
              </div>
            </div>

            <div className="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-sec" count="03">
                <div className="bottom-curve"></div>
                <div className="icon-box"><span className="flaticon-computer"></span></div>
                <h6><Link href="/service/digital-marketing">digital <br />marketing</Link></h6>
              </div>
            </div>

            <div className="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-sec" count="04">
                <div className="bottom-curve"></div>
                <div className="icon-box"><span className="flaticon-computer"></span></div>
                <h6><Link href="#">Blockchain <br /> development</Link></h6>
              </div>
            </div>

            <div className="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-sec" count="05">
                <div className="bottom-curve"></div>
                <div className="icon-box"><span className="flaticon-computer"></span></div>
                <h6><Link href="/service/app-development">App <br />Development</Link></h6>
              </div>
            </div>

            <div className="service-sec col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="inner-sec" count="06">
                <div className="bottom-curve"></div>
                <div className="icon-box"><span className="flaticon-computer"></span></div>
                <h6><Link href="/service/e-commerce-development">Ecommerce software <br />Development</Link></h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section about-instruction py-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 my-auto">
              <div className="inner">
                <div className="head">
                  <h2 className='heading'>Why Us<span className="dot">.</span></h2>
                  <p className="para">We are an agile, steadfast, and committed team who strives, to learn new technologies, enter untapped avenues, beat tedious challenges, and succeed at heights never imagined through our positively nurtured attitude.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 position-relative imgSec">
              <Image src={AboutSec} alt="About" draggable="false" className='aboutsecimg h-100 w-100' />
            </div>
          </div>
        </div>
      </section>
      <Team />
      {/* </motion.div> */}
    </>
  )
}

export default About;

export async function getStaticProps() {
  return {
    props: {
      title: "About - Elite Blue Technologies",
      title: "Elite Blue Technologies",
      metaTitle: "Elite Blue Technologies",
      metaKeywords: "",
      metaDescription: "At Elite Blue Technologies, our focus is on delivering results for our clients. As an expert digital agency, we specialize in building brands and attracting customers, not just making empty promises. Let us help you grow your business through creative and effective digital solutions.",
    },
  }
}