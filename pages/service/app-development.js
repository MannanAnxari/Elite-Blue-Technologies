import React from 'react'
import { motion } from 'framer-motion';
import serviceone from "@/public/Assets/mobile-app-dev.png";
import Tech from '@/Components/Technologies/tech';
import c2 from '@/public/Assets/services/CkP-4uSWgAAa4Cm.png';
import Contact from '@/pages/contact';
import Image from 'next/image';
import Head from 'next/head';


export default function AppDevelpment({ title, metaKeywords, metaTitle, metaDescription }) {
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
            <section className="section about-section services-section position-relative overflow-hidden w-100">
                <div className="container">
                    <div className="circle"></div>
                    <div className="circle circle-1"></div>
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head">
                                    {/* <h4 className='heading-sm text-white'>Services</h4> */}
                                    <h2 className='heading text-white' style={{ textTransform: 'unset' }}>Outstanding Mobile App Development For Your Business<span className="dot">.</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 banner-img-h">
                            <Image src={serviceone} alt="About" draggable="false" className='aboutimg h-auto' style={{ width: '70%' }} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section py-5 pb-0">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <h2 className="heading heading mb-3">
                                Cost effective digital marketing services that can  <span style={{ color: '#16539e' }}>impact various target markets </span>
                            </h2>
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head py-2 mb-auto">
                                    <p className="para">We at Elite Blue provide scalable digital marketing solutions that can be metamorphosed according to different target demographics. Living up to our name, we are the Elite Blue that helps our clients develop an online footprint so strong it remains undeterred in the face of adversity. DAX helps businesses acquire quality leads through information-dense marketing that directly influences their target market. With us you get a digital marketing consultant that turns visitors into loyal customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 ">
                            <h1 className='heading'>
                                Reach out to your Global Audience with our <span>Versatile E-Commerce Website Services </span>
                            </h1>
                            <p className='para'>The main priority of every E-commerce web development company is to help brands raise brand awareness with their target audience. They are storytellers that relay a narrative of the brand to the target demographic in such a way that it allows the latter to connect to the brand. A digital agency helps businesses effectuate a distinct identity amidst a galore of companies and become an industry key player.</p>
                            <p className='para'>Ecommerce strategies set in motion by experienced digital resources can drive massive benefits for businesses of all types and sizes. Here’s when Elite Blue enters the picture. Our team uses an analytical approach to deliver web development services that set your business at par with your competitors. So, whether it is establishing a brand new identity or to contribute to the sustainability of the existing one, our prime objective is to witness our client go in and upward in the race.</p>
                        </div>
                        <div className="col-lg-8 ">
                            <div className="row ">
                                <div className="col-lg-6 p-3">
                                    <div className="card card-h-css p-4 py-md-5">
                                        <svg className='mb-4' version="1.1" fill="#212121" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                                            <path d="M31.333 29.333h-30.667c-0.368 0-0.667-0.3-0.667-0.667v-25.333c0-0.367 0.299-0.667 0.667-0.667h30.667c0.367 0 0.667 0.3 0.667 0.667v25.333c0 0.367-0.3 0.667-0.667 0.667zM1.333 28h29.333v-24h-29.333v24zM30.667 9.333h-29.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h29.333c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM19.333 17.333h-5.333c-0.368 0-0.667-0.3-0.667-0.667v-4c0-0.367 0.299-0.667 0.667-0.667h5.333c0.367 0 0.667 0.3 0.667 0.667v4c0 0.367-0.3 0.667-0.667 0.667zM14.667 16h4v-2.667h-4v2.667zM14 26.667h-5.333c-0.368 0-0.667-0.3-0.667-0.667v-4c0-0.367 0.299-0.667 0.667-0.667h5.333c0.368 0 0.667 0.3 0.667 0.667v4c0 0.367-0.299 0.667-0.667 0.667zM9.333 25.333h4v-2.667h-4v2.667zM24.667 26.667h-5.333c-0.367 0-0.667-0.3-0.667-0.667v-4c0-0.367 0.3-0.667 0.667-0.667h5.333c0.367 0 0.667 0.3 0.667 0.667v4c0 0.367-0.3 0.667-0.667 0.667zM20 25.333h4v-2.667h-4v2.667zM22 22c-0.367 0-0.667-0.3-0.667-0.667v-1.333h-9.333v1.333c0 0.367-0.299 0.667-0.667 0.667s-0.667-0.3-0.667-0.667v-2c0-0.367 0.299-0.667 0.667-0.667h10.667c0.367 0 0.667 0.3 0.667 0.667v2c0 0.367-0.3 0.667-0.667 0.667zM16.667 19.333c-0.368 0-0.667-0.3-0.667-0.667v-1.333c0-0.367 0.299-0.667 0.667-0.667 0.367 0 0.667 0.3 0.667 0.667v1.333c0 0.367-0.3 0.667-0.667 0.667zM4 6c0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667zM6.667 6c0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667zM9.333 6c0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667z"></path>
                                        </svg>
                                        <h1 className='heading-sm heading-sm-h'>Increase Sales Turnover</h1>
                                        <p className='para'>Our E-commerce web development strategies such as SEO plugins, progressive web apps, and artificial intelligence chatbots have been proven efficient to convert visits into transactions, and in turn sales volume.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 p-3">
                                    <div className="card card-h-css p-4 py-md-5">
                                        <svg className='mb-4' version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#212121" width="50" height="50" viewBox="0 0 32 32">
                                            <path d="M31.333 29.333h-30.667c-0.368 0-0.667-0.3-0.667-0.667v-25.333c0-0.367 0.299-0.667 0.667-0.667h30.667c0.367 0 0.667 0.3 0.667 0.667v25.333c0 0.367-0.3 0.667-0.667 0.667zM1.333 28h29.333v-24h-29.333v24zM30.667 9.333h-29.333c-0.368 0-0.667-0.3-0.667-0.667s0.299-0.667 0.667-0.667h29.333c0.367 0 0.667 0.3 0.667 0.667s-0.3 0.667-0.667 0.667zM6.693 23.021c-0.052 0-0.088-0.032-0.088-0.087v-2.487c0-0.472-0.224-0.787-0.671-0.787-0.429 0-0.681 0.308-0.681 0.787v2.485c0 0.055-0.035 0.087-0.088 0.087h-1.073c-0.055 0-0.089-0.032-0.089-0.087v-5.907c0-0.052 0.035-0.084 0.089-0.084h1.073c0.053 0 0.088 0.032 0.088 0.084v2.057h0.011c0.196-0.268 0.563-0.489 1.117-0.489 0.957 0 1.476 0.661 1.476 1.609v2.727c0 0.055-0.036 0.089-0.089 0.089l-1.075 0.001zM10.239 23.073c-1.001 0-1.377-0.448-1.377-1.44v-1.967c0-0.036-0.017-0.055-0.053-0.055h-0.268c-0.055 0-0.091-0.036-0.091-0.088v-0.743c0-0.055 0.036-0.091 0.091-0.091h0.268c0.036 0 0.053-0.017 0.053-0.052v-1.164c0-0.052 0.035-0.084 0.089-0.084h1.064c0.053 0 0.089 0.032 0.089 0.084v1.164c0 0.035 0.019 0.052 0.053 0.052h0.555c0.053 0 0.089 0.036 0.089 0.091v0.743c0 0.052-0.036 0.088-0.089 0.088h-0.555c-0.035 0-0.053 0.019-0.053 0.055v1.915c0 0.32 0.107 0.427 0.393 0.427h0.215c0.053 0 0.089 0.036 0.089 0.091v0.885c0 0.052-0.036 0.084-0.089 0.084l-0.473 0.005zM13.021 23.073c-1.001 0-1.377-0.448-1.377-1.44v-1.967c0-0.036-0.019-0.055-0.053-0.055h-0.268c-0.053 0-0.089-0.036-0.089-0.088v-0.743c0-0.055 0.036-0.091 0.089-0.091h0.268c0.035 0 0.053-0.017 0.053-0.052v-1.164c0-0.052 0.036-0.084 0.089-0.084h1.064c0.055 0 0.089 0.032 0.089 0.084v1.164c0 0.035 0.019 0.052 0.053 0.052h0.555c0.055 0 0.088 0.036 0.088 0.091v0.743c0 0.052-0.033 0.088-0.088 0.088h-0.555c-0.035 0-0.053 0.019-0.053 0.055v1.915c0 0.32 0.108 0.427 0.393 0.427h0.215c0.055 0 0.088 0.036 0.088 0.091v0.885c0 0.052-0.033 0.084-0.088 0.084l-0.473 0.005zM14.427 24.631c-0.055 0-0.091-0.032-0.091-0.085v-5.755c0-0.055 0.036-0.091 0.091-0.091h1.073c0.053 0 0.088 0.036 0.088 0.091v0.308h0.011c0.195-0.299 0.563-0.501 1.136-0.501 0.724 0 1.243 0.352 1.467 1.033 0.107 0.339 0.153 0.661 0.153 1.227 0 0.552-0.047 0.883-0.153 1.224-0.224 0.68-0.743 1.036-1.467 1.036-0.573 0-0.94-0.205-1.136-0.5h-0.011v1.921c0 0.055-0.035 0.085-0.088 0.085h-1.073v0.007zM17.003 21.597c0.053-0.171 0.081-0.359 0.081-0.744 0-0.383-0.028-0.576-0.081-0.747-0.099-0.308-0.331-0.468-0.672-0.468-0.331 0-0.563 0.151-0.661 0.468-0.053 0.171-0.081 0.361-0.081 0.747s0.028 0.573 0.081 0.744c0.099 0.304 0.331 0.465 0.661 0.465 0.341 0 0.573-0.161 0.672-0.465zM19.107 19.844v-1.063c0-0.055 0.036-0.091 0.088-0.091h1.075c0.053 0 0.089 0.036 0.089 0.091v1.063c0 0.055-0.036 0.088-0.089 0.088h-1.075c-0.052 0.001-0.088-0.033-0.088-0.088zM19.107 21.857c0-0.055 0.036-0.085 0.088-0.085h1.075c0.053 0 0.089 0.031 0.089 0.085v1.076c0 0.055-0.036 0.087-0.089 0.087h-1.075c-0.052 0-0.088-0.032-0.088-0.087v-1.076zM23.105 16.927c0.019-0.060 0.053-0.088 0.116-0.088h0.973c0.055 0 0.083 0.036 0.063 0.088l-1.948 6.101c-0.020 0.063-0.055 0.084-0.117 0.084h-0.968c-0.052 0-0.080-0.032-0.063-0.084l1.944-6.101zM26.828 16.927c0.019-0.060 0.055-0.088 0.116-0.088h0.975c0.055 0 0.081 0.036 0.063 0.088l-1.951 6.101c-0.019 0.063-0.052 0.084-0.115 0.084h-0.968c-0.055 0-0.083-0.032-0.063-0.084l1.943-6.101zM4 6c0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667zM6.667 6c0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667zM9.333 6c0 0.368-0.299 0.667-0.667 0.667s-0.667-0.299-0.667-0.667c0-0.368 0.299-0.667 0.667-0.667s0.667 0.299 0.667 0.667z"></path>
                                        </svg>
                                        <h1 className='heading-sm heading-sm-h'>Round-The-Globe Business Operations</h1>
                                        <p className='para'>We provide SEO-friendly eCommerce website designs and continuous optimization for better ranking on various search engines and subsequently increased global reach.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-6 p-3">
                                    <div className="card card-h-css p-4 py-md-5">
                                        <svg className='mb-4' version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                                            <path d="M1.305 0h1.333v32h-1.333v-32zM0 29.32h32v1.333h-32v-1.333zM15.305 27.987h-2.667c-0.367 0-0.667-0.3-0.667-0.667v-12c0-0.368 0.3-0.667 0.667-0.667h2.667c0.368 0 0.667 0.299 0.667 0.667v12c0 0.368-0.299 0.667-0.667 0.667zM13.305 26.653h1.333v-10.667h-1.333v10.667zM8.639 27.987h-2.667c-0.367 0-0.667-0.3-0.667-0.667v-6.667c0-0.368 0.3-0.667 0.667-0.667h2.667c0.368 0 0.667 0.299 0.667 0.667v6.667c0 0.368-0.299 0.667-0.667 0.667zM6.639 26.653h1.333v-5.333h-1.333v5.333zM21.972 27.987h-2.667c-0.367 0-0.667-0.3-0.667-0.667v-6.667c0-0.368 0.3-0.667 0.667-0.667h2.667c0.367 0 0.667 0.299 0.667 0.667v6.667c0 0.368-0.3 0.667-0.667 0.667zM19.972 26.653h1.333v-5.333h-1.333v5.333zM28.639 27.987h-2.667c-0.367 0-0.667-0.3-0.667-0.667v-13.333c0-0.368 0.3-0.667 0.667-0.667h2.667c0.367 0 0.667 0.299 0.667 0.667v13.333c0 0.368-0.3 0.667-0.667 0.667zM26.639 26.653h1.333v-12h-1.333v12zM5.305 19.263c-0.189 0-0.377-0.080-0.509-0.235-0.237-0.281-0.203-0.701 0.079-0.94l9.332-7.889c0.264-0.223 0.656-0.208 0.904 0.039l4.805 4.817 7.639-7.705c0.261-0.26 0.687-0.264 0.943-0.004 0.261 0.26 0.264 0.681 0.005 0.943l-8.109 8.181c-0.125 0.125-0.296 0.197-0.472 0.197-0.124 0.023-0.348-0.071-0.472-0.195l-4.849-4.857-8.863 7.493c-0.127 0.105-0.28 0.155-0.432 0.155z"></path>
                                        </svg>
                                        <h1 className='heading-sm heading-sm-h'>Cost-Effective Management</h1>
                                        <p className='para'>Our affordable services are less than the cost spent on the set-up and running of a store while providing benefits that substantially surpass the latter.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 p-3">
                                    <div className="card card-h-css p-4 py-md-5">
                                        <svg className='mb-4' version="1.1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                                            <path d="M15.167 22.833c-3.953 0-7.175-4.293-7.476-8.091-0.889-0.251-1.691-0.987-1.691-1.909v-2.667c0-0.833 0.807-1.435 1.333-1.739v-2.261c0-2.528 2.020-4.592 4.529-4.664 0.536-0.215 2.648-1.003 4.804-1.003 3.44 0 5.333 2.013 5.333 5.667v2.059c1.333 0.26 1.333 1.331 1.333 1.941v2.667c0 0.928-0.421 1.62-1.101 1.883-0.256 3.94-3.193 8.117-7.065 8.117zM16.667 1.833c-2.163 0-4.383 0.936-4.404 0.947-0.083 0.035-0.172 0.053-0.263 0.053-1.837 0-3.333 1.495-3.333 3.333v2.667c0 0.261-0.155 0.5-0.393 0.608-0.475 0.215-0.915 0.583-0.941 0.731l0.001 2.661c0 0.293 0.56 0.667 1 0.667 0.368 0 0.667 0.299 0.667 0.667 0 3.301 2.845 7.333 6.167 7.333 3.24 0 5.751-3.943 5.751-7.333 0-0.368 0.3-0.667 0.667-0.667 0.279 0 0.417-0.224 0.417-0.667v-2.667c0-0.667 0-0.667-0.667-0.667-0.368 0-0.667-0.299-0.667-0.667v-2.667c-0.001-2.916-1.308-4.333-4.001-4.333zM29.333 31.5h-8c-1.103 0-2-0.897-2-2v-4c0-1.103 0.897-2 2-2h8c1.103 0 2 0.897 2 2v4c0 1.103-0.897 2-2 2zM21.333 24.833c-0.367 0-0.667 0.3-0.667 0.667v4c0 0.367 0.3 0.667 0.667 0.667h8c0.367 0 0.667-0.3 0.667-0.667v-4c0-0.367-0.3-0.667-0.667-0.667h-8zM28.667 23.5h-1.333v-2.667c0-1.103-0.897-2-2-2s-2 0.897-2 2v2.667h-1.333v-2.667c0-1.839 1.495-3.333 3.333-3.333s3.333 1.495 3.333 3.333v2.667zM1.333 30.833c-0.368 0-0.667-0.299-0.667-0.667 0-3.861 3.084-6.667 7.333-6.667h1.644l1.775-2.648c0.207-0.305 0.619-0.388 0.925-0.183 0.305 0.204 0.388 0.619 0.183 0.924l-1.972 2.944c-0.124 0.185-0.332 0.296-0.555 0.296h-2c-3.532 0-6 2.193-6 5.333 0 0.368-0.299 0.667-0.667 0.667z"></path>
                                        </svg>
                                        <h1 className='heading-sm heading-sm-h'>Scalability</h1>
                                        <p className='para'>We ensure that your increasing operations do not become a limiting factor to your business. Therefore, we deliver scalable Ecommerce website development services that accommodate the growth of the brand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="section py-0">
                <div className="container">

                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <Image src={c2} alt="About" draggable="false" className='aboutimg w-100 h-auto d-md-block d-none' />

                        </div>
                        <div className="col-lg-6 col-12  my-auto">
                            <div className="inner">
                                <div className="head py-2 mb-auto">
                                    <h2 className='heading heading'>Elite Blue Technologies – Helping global brands introduce superior digital products<span className="dot">.</span></h2>
                                    <p className='para'>
                                        We understand how crucial it is for businesses to keep at pace with the ever-changing consumer behavior. Modern technology is constantly evolving and is also playing its part to influence how people shop and satisfy their needs. Today, people expect services/goods to be as accessible as if at their fingertips – a phenomenon that gave birth to mobile app development.</p>
                                    <p className="para " >
                                        Using an agile development methodology, Elite Blue churns android app development and iOS app development for businesses of all scales. We aim to create solutions that not only meet the user’s needs but also cater to the business industry and its vertical needs. We offer a versatile engagement model that begins with a detailed assessment of your business and IT requirements to deliver a mobile app design that allows quick and cost-effective solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<section className="p-5">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row ">*/}
            {/*            <div className="col-lg-6 col-12 my-auto">*/}
            {/*               <Image src={c1} alt="About" draggable="false" className='aboutimg w-100' />*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-6 col-12 my-auto">*/}
            {/*                <div className="inner">*/}
            {/*                    <div className="head py-2 mb-auto">*/}
            {/*                        /!* <h4 className='heading-sm'>About</h4> *!/*/}
            {/*                        /!* <h2 className='heading'>CUSTOM WEB DEVELOPMENT<span className="dot">.</span></h2> *!/*/}
            {/*                        <p className="para">The past decade witnessed a surge in the world’s inclination towards mobile applications. With the sales of smartphones surpassing 3 billion mark, the rise in the need and demand for mobile app development was inevitable. While the consumer enjoyed a more reliable, personalized, and convenient approach, businesses reveled in increased ROI and brand promotion. Hence, today, businesses and firms are keen to incorporate such applications into their digital existence.</p>*/}
            {/*                        /!* <Button link="" text="Read more" type="light" /> *!/*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section className="p-5 bg-radial">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row ">*/}
            {/*            <div className="col-lg-6 col-12 my-auto">*/}
            {/*                <div className="inner">*/}
            {/*                    <div className="head py-2 mb-auto">*/}
            {/*                        /!* <h4 className='heading-sm'>About</h4> *!/*/}
            {/*                        /!* <h2 className='heading'>CUSTOM WEB DEVELOPMENT<span className="dot">.</span></h2> *!/*/}
            {/*                        <p className="para">We live in a world where mobile usage has increased tremendously due to the smartphone era that we are living in, and more than that, mobile applications have taken over the world with more and more advancements, and now you have an app for literally every service, every business, and every other basic necessity.</p>*/}
            {/*                        /!* <Button link="" text="Read more" type="light" /> *!/*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-lg-6 col-12 my-auto">*/}
            {/*               <Image src={c2} alt="About" draggable="false" className='aboutimg w-100' />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section className="section py-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-6 col-12 my-auto">
                            <h3 className="heading fs-3">
                                Our projects are beholden to an intricately designed software development process customized according to client requirements
                            </h3>
                        </div>
                        <div className="col-lg-6 col-12 my-auto">
                            <div className="inner">
                                <div className="head py-2 mb-auto">
                                    <p className="para">Our software development team constantly switches up the process through trial and error. They are always on the look out to find better and more efficient ways to evolve the system to help our clients meet their objectives.
                                        <br />
                                        <br />
                                        Here is an overview of what you would get by partnering with EliteBlue Technologies:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-md-4 mt-3 fs-lggg">
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>1</h3>
                                <p className="para">
                                    Get on board with us
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>2</h3>
                                <p className="para">
                                    Discuss your idea
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>3</h3>
                                <p className="para">
                                    We will create Prototype

                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>4</h3>
                                <p className="para">
                                    Choose Technology

                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>5</h3>
                                <p className="para">
                                    UI Design Phase
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>6</h3>
                                <p className="para">
                                    Development Phase

                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>7</h3>
                                <p className="para">
                                    QA Cycle
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 my-3">
                            <div className="sec text-center">

                                <h3 className="fw-bold heading text-main" style={{ fontSize: "64px" }}>8</h3>
                                <p className="para">
                                    Deployment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section ">
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
            <section className="position-relative">
                <Contact />
            </section>
            {/* </motion.div> */}
        </>
    )
}


export async function getStaticProps() {
    return {

        props: {
            title: "App Development - Elite Blue Technologies",
            metaTitle: "Elite Blue Technologies",
            metaKeywords: "",
            metaDescription: "At Elite Blue Technologies, our focus is on delivering results for our clients. As an expert digital agency, we specialize in building brands and attracting customers, not just making empty promises. Let us help you grow your business through creative and effective digital solutions.",
        },
    }
}
