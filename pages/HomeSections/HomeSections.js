import React from 'react';
import { Button } from '@/Components/Button/Button';
import Portfolio from '@/Components/Portfolio.json';
import Circle from '@/public/Assets/shape-circle.png';
import Service from '@/Components/Services/service';
import LetsTalk from '@/Components/LetsTalk/LetsTalk';
import { motion } from 'framer-motion';
import Tech from '@/Components/Technologies/tech';
// import './Home.css'; 
import Slider from "react-slick";
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Service1 from '@/public/Assets/services_1.png';
import Service2 from '@/public/Assets/services_2.png';
import Service3 from '@/public/Assets/services_3.png';
import Service4 from '@/public/Assets/services_4.png';
import Service5 from '@/public/Assets/services_5.png';
import Service6 from '@/public/Assets/services_6.png';

export default function HomeSections() {


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>


            <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }} id="home">
                {/* <Slider {...settings} className='slider'>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://upload.wikimedia.org/wikipedia/commons/3/32/Dribbble_logo.png'} />
                </div>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png'} />
                </div>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Dell_Logo.png/1200px-Dell_Logo.png'} />
                </div>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png'} />
                </div>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://play-lh.googleusercontent.com/amvDjjQDKeTlM3KaE12Xm_Z94cbgP08f-k5Ur8kBfkV5PB_dNTbUGHFgc9kb0pVmnQ=w600-h300-pc0xffffff-pd'} />
                </div>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://upload.wikimedia.org/wikipedia/commons/9/9a/CodePen_logo.png'} />
                </div>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://www.freepnglogos.com/uploads/microsoft-logo-4.png'} />
                </div>
                <div className="slide">
                    <Image height={100} width={254} style={{ objectFit: 'contain' }} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'} />
                </div>
            </Slider> */}
                {/*<section className="section bg-radial">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row ">*/}
                {/*            <div className="col-lg-6 col-12 my-auto">*/}
                {/*                <div className="inner">*/}
                {/*                    <div className="head">*/}
                {/*                        <h4 className='heading-sm'>About</h4>*/}
                {/*                        <h2 className='heading'>we do design, code & development<span className="dot">.</span></h2>*/}
                {/*                        <p className="para">Eliteblue is a group of driven engineers and strategists dedicated to creating mission-critical software solutions. Thanks to our business-focused strategy, we thrive on creating state-of-the-art bespoke applications that boost your business operations fro</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <Button link="about" text="Learn more" type="dark" />*/}
                {/*            </div>*/}
                {/*            <div className="col-lg-6 col-11 bg-white p-md-5 p-4 py-5 rounded-md-5 rounded-4 shadow-main mt-lg-0 mt-5 mx-auto">*/}
                {/*                <HomeForm action="" method="" formId="contactForm" />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="servics section pb-0">
                    <div className="container">
                        <div className="sec-title">

                            {/* <div className="row">
                            <div className="head col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <h2 className='heading'>Our Key Values<span
                                    className="dot">.</span></h2>
                            </div>
                            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                <p className="para">
                                    Core values are critical if you want to create a long-lasting, successful,
                                    and motivating place to work.
                                </p>
                            </div>
                        </div> */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className='heading heading-h'>
                                        <span> Digital Agency Solutions </span> Tailor-Made for your Business.
                                    </h1>
                                </div>
                                <div className="col-lg-6">
                                    <p className='para'>
                                        The key to being a brand that not only makes a good impression but also refuses to evaporate from the ever-volatile industry is partnering with a high-performing digital agency. Elite blue – as a Creative Agency, we honour our name and remain staunch supporters of our clients through high-yielding digital solutions within the ever-changing market.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <p className='para'>


                                        Our seasoned professionals are hard at work, day in and day out, looking for, designing, and developing the most efficient digital marketing solutions to boost our clients’ sales and help them win over their customers. We are constantly refining our services to keep going with the industry’s changing nature and ensure that our clients remain updated. We invest heavily in research and development and consistently analyze the industry to ensure we are progressing. However, it is not only quality digital solutions that we are after but also cultivating customer relations that we hone in on. Our theory is that the foundation of any long-lasting relationship between a brand and its customers starts from comfort. This is cultivated through well-researched digital solutions and customer services such as website maintenance, updates, and any other assistance a customer can ask for.                                </p>
                                    <div className="link-box py-3">
                                        <Button link={'/about'} text={'Let’s Grow Together'} type={'dark'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="services">
                        <div className="row">
                            <div className="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp animated" data-wow-delay="0ms"
                                    data-wow-duration="1500ms">
                                    <div className="bottom-curve"></div>
                                    <div className="icon-box"><span className="flaticon-vector"></span></div>
                                    <h5><a href="#">Sincerity</a></h5>
                                    <div className="text">
                                        Quality deliverance of work and sincerity to clients and organization
                                    </div>
                                    <div className="link-box"><a href="#"><span
                                        className="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            <div className="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp animated">
                                    <div className="bottom-curve"></div>
                                    <div className="icon-box"><span className="flaticon-digital"></span></div>
                                    <h5><a href="#">Dedication</a></h5>
                                    <div className="text">
                                        Ethical Values towards both the team members and clients, no matter what
                                    </div>
                                    <div className="link-box"><a href="#"><span
                                        className="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                            <div className="servicez col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="inner-box wow fadeInUp animated" data-wow-delay="600ms"
                                    data-wow-duration="1500ms">
                                    <div className="bottom-curve"></div>
                                    <div className="icon-box"><span className="flaticon-instant-camera"></span></div>
                                    <h5><a href="#">Results</a></h5>
                                    <div className="text">Timely deliverance of work according to the clients need. </div>
                                    <div className="link-box"><a href="#"><span
                                        className="fa fa-angle-right"></span></a></div>
                                </div>
                            </div>


                        </div>
                        
                    </div> */}
                    </div>
                </section>
                <section className="section my-1 position-relative overflow-hidden pb-5 servics">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 shape-circle">
                                <Image fill={true} className='w-100 h-100 position-relative' src={Circle} alt="Shape" />
                            </div>
                            <div className="col-md-10">
                                <div className="head">
                                    {/*<h4 className="heading-sm">What we can do for you</h4>*/}
                                    <h2 className="heading">Services We can help you with
                                        <span className="dot">.</span>
                                    </h2>
                                    <p className="para">
                                        Elite Blue Technologies has buffed the quality of its digital agency services through continuous research so you don’t struggle to find your footing within the industry. We strove to develop the quality of services that would not only encompass all our client’s requirements but also yield desirable results in an already crowded market.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4 w-100 mx-auto">
                            <Service title="Creative Branding & Design" link="#" description="Designing a brand identity and logo, as well as packaging, web and  mobile design, and layout and print design." image={Service6} />
                            <Service title="Web Development" link="#" description="Web development on the front-end Web development on the backend WordPress Customization Development of a CMS" image={Service5} />
                            <Service title="Mobile Application Development" link="#" description="Mobile Systems Custom Platform Back-End Executions Interface Apps" image={Service4} />
                            <Service title="Ecommerce Software Development" link="#" description="ECommerce software development addresses the requirement for a digital presence from worldwide manufacturing, distribution, and retail organizations." image={Service3} />
                            <Service title="Digital Marketing" link="#" description="There are more leads. More sales are expected. Increased revenue. Eliteblue Technologies provides digital marketing services. We’ll assist your company in making the most significant impact, from traffic to income." image={Service2} />
                            <Service title="Blockchain Development" link="#" description="Blockchain development services are revolutionising the way people deal all around the world. With the support of secure, dependable, and high-quality blockchain technology development services, you can avoid third-party intrusion." image={Service1} />
                        </div>
                    </div>
                </section>
                <section class="services section">
                    <div class="container">
                        <div class="sec-title mb-md-5 mb-3">
                            <div class="row">
                                <div class="head col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <h2 className='heading'>Our Key Values<span class="dot">.</span></h2>
                                </div>
                                <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12">
                                    <p class="para">Core values are critical if you want to create a long-lasting, successful,
                                        and motivating place to work.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="services">
                            <div class="row">
                                <div class="servicez col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="inner-box wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms">
                                        <div class="bottom-curve"></div>
                                        <div class="icon-box"><span class="flaticon-vector"></span></div>
                                        <h5><a href="#">Sincerity</a></h5>
                                        <div class="text">Quality deliverance of work and sincerity to clients and organization
                                        </div>
                                        <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                    </div>
                                </div>


                                <div class="servicez col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="inner-box wow fadeInUp animated" >
                                        <div class="bottom-curve"></div>
                                        <div class="icon-box"><span class="flaticon-digital"></span></div>
                                        <h5><a href="#">Dedication</a></h5>
                                        <div class="text">Ethical Values towards both the team members and clients, no matter what

                                        </div>
                                        <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                    </div>
                                </div>


                                <div class="servicez col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div class="inner-box wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" >
                                        <div class="bottom-curve"></div>
                                        <div class="icon-box"><span class="flaticon-instant-camera"></span></div>
                                        <h5><a href="#">Results</a></h5>
                                        <div class="text">Timely deliverance of work according to the clients need.</div>
                                        <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section class="section jarallax">
                    <div class="container">
                        <div class="content-box">
                            <div class="sec-title">

                                <div class="row">
                                    <div class="head col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-3">
                                        <h2 className='heading text-white'>
                                            Choose Us For Your Custom
                                            Software Development<span class="dot">.</span></h2>
                                    </div>
                                    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 mb-4">
                                        <p class="para">
                                            We develop individualized software solutions, which is unique and beyond the standard approach, to meet client’s specific needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="link-box">
                                <Button link={''} text={'Get a quote'} type={'dark'} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section portfolio">
                    <div className="container">
                        <div className="row mb-md-4 mb-3">
                            <div className="col-12">
                                <div className="head">
                                    <h4 className="heading-sm">Portfolio</h4>
                                    <h2 className="heading">Our Featured Work

                                        <span className="dot">.</span>
                                    </h2>
                                    <p className="para">
                                        Our omnichannel strategies provide a seamless user experience on your website that promises traffic and conversion. Whether your brand needs web development, digital marketing, or software development services, our digital agency professionals have the ability to mold their skillsets to bring your unique project to life.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="filter-list row">
                            {
                                Portfolio.slice(0, 6).map((item) => {
                                    return <div className="gallery-item all web-design col-lg-4 col-md-6 col-sm-12" key={item.id}>
                                        <div className="inner-box">
                                            <figure className="image"> <Image fill={true} className='w-100 h-100 position-relative' src={item.image} alt="" /></figure>
                                            <a href="images/gallery/1.jpg" className="lightbox-image overlay-box" target='_blank'></a>
                                            <div className="cap-box">
                                                <div className="cap-inner">
                                                    <div className="cat"><span>{item.category}</span></div>
                                                    <div className="title">
                                                        <h5><a href={item.portfolio_url}>{item.title}</a></h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <div className="row filter-layout dynamic-filter-count-layout masonary-layout">
                            {/* {
                            Portfolio.map((item) => {
                                return <div className="col-lg-6 col-md-6 filter-item masonary-item branding ">
                                    <div className="portfolio-masonary__box">
                                        <img src={item.image} alt="" />
                                        <div className="portfolio-masonary__box-content">
                                            <p>{item.category}</p>
                                            <h3><a href={item.portfolio_url}>{item.title}</a></h3>
                                        </div>
                                    </div>
                                </div>
                            })
                        } */}
                        </div>
                    </div>
                </section>
                <section className="section pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="head">
                                    <h4 className="heading-sm">TECHNOLOGIES WE USE
                                    </h4>
                                    <h2 className="heading">Highlights of technologies we use
                                        <span className="dot">.</span>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <Tech />

                    </div>
                </section>
                <section className="section pt-0">
                    <LetsTalk />
                </section>
            </motion.div>
        </>
    )
}


