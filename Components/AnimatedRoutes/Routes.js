import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { HomeSections } from '../../pages/HomeSections/HomeSections';
import { About } from '../../pages/About';
import { Contact } from '../../pages/contact';
import { AnimatePresence } from 'framer-motion';
import { Portfolio } from '../../pages/portfolio';
import { AppDevelpment } from '../SingleServices/AppDevelpment';
import { BrandingNDesign } from '../SingleServices/BrandingNDesign';
import { DigitalMarketing } from '../SingleServices/DigitalMarketing';
import { ECommerceDevelopment } from '../SingleServices/ECommerceDevelopment';
import { WebDevelopment } from '../SingleServices/WebDevelopment';
import { Blog } from '../../pages/blogs/blog';
import { SingleBlog } from '../../pages/blogs/single-blog/[slug]';
import { Loader } from '../Preloader/Loader';


export const AnimatedRoutes = () => {

    const locaion = useLocation();

    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState("")
    const location = useLocation()

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

    if (progress) {
        return <>
        <Loader />
        </>
    }
    else {


        return (
            <AnimatePresence>
                <Routes location={locaion} key={locaion.pathname}>
                    <Route path="/" element={<HomeSections />} />
                    <Route path="about" element={<About />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="android-development" element={<AppDevelpment />} />
                    <Route path="branding-and-design" element={<BrandingNDesign />} />
                    <Route path="digital-marketing" element={<DigitalMarketing />} />
                    <Route path="ecommerce-development" element={<ECommerceDevelopment />} />
                    <Route path="web-development" element={<WebDevelopment />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blog/:singleBlog" element={<SingleBlog />} />
                </Routes>
            </AnimatePresence>
        )

    }
}
