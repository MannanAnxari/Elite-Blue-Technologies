import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from '@/Components/Portfolio.json';
// import './Portfolio.css'; 
import { toast } from 'react-hot-toast';
import { PortfolioFilter } from '@/Components/Portfolio/PortfolioFilter';
import { PortfolioItems } from '@/Components/Portfolio/PortfolioItems';
import Head from 'next/head';


export default function Portfolio({ title, metaKeywords, metaTitle, metaDescription, imgs, filtereds, filtr }) {
    const [filtered, setFiltered] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [fltr, setfltr] = useState([]);
    const [img, setImg] = useState(null);

    useEffect(() => { setImg(imgs); setfltr(filtr); setFiltered(filtereds) }, []);

    let filteredItm = fltr.map((item) => {
        return item.category
    });

    var tempData = [];

    for (var index = 0; index < [...new Set(filteredItm.flat())].length; index++) {
        var aa = { "link": `${[...new Set(filteredItm.flat())][index]}` };
        tempData.push(aa);
    }


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
            <section className="section  portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head">
                                {/*<h4 className="heading-sm">Portfolio</h4>*/}
                                <h2 className="heading">OUR RECENT WORK
                                    <span className="dot">.</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <section className="gallery-section">
                        <div className="auto-container">
                            <div className="mixitup-gallery">
                                <PortfolioFilter
                                    all={fltr}
                                    setFiltered={setFiltered}
                                    activeFilter={activeFilter}
                                    setActiveFilter={setActiveFilter}
                                    filtered={filtered}
                                    tempData={tempData}
                                />
                                <PortfolioItems PortfolioItem={filtered} img={img} />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            {/* </motion.div> */}
        </>
    )
}


export async function getStaticProps() {

    const res = await fetch(`https://eliteblue.net/e-panel/api/portfolio`);
    const data = await res.json();

    // useEffect(() => {
    //     fetch(`https://eliteblue.net/e-panel/api/portfolio`)
    //         .then((response) => response.json())
    //         .then((actualData) => { setFiltered(actualData.data); setfltr(actualData.data); setImg(actualData.media_path) })
    //         .catch((err) => {
    //             setFiltered([]);
    //             toast.error("Something went wrong!");
    //         });
    // }, []);


    return {
        props: {
            imgs: data.media_path,
            filtereds: data.data,
            filtr: data.data,
            title: "Elite Blue Technologies",
            metaTitle: "Elite Blue Technologies",
            metaKeywords: "",
            metaDescription: "At Elite Blue Technologies, our focus is on delivering results for our clients. As an expert digital agency, we specialize in building brands and attracting customers, not just making empty promises. Let us help you grow your business through creative and effective digital solutions.",
        },
    }
}


