import React from 'react';
import config from '../../config';
import Banner from '../Assets/bg.jpg';
import BannerVideo from '../Assets/bg.mp4';
import BannerLogo from '../Assets/BannerLogo.png';
import { useLocation } from "react-router-dom";
import { Scroll } from '../ScrollDown/Scroll';
import './Home.css';

export const Home = () => {
    const location = useLocation();
    console.log();
    return (
        <>
            {location.pathname === "/" &&
                <div className='position-relative'>
                    <Scroll />
                    <div className='bluredHeader position-relative overflow-hidden'>
                        <div className={`blur position-${config.HEADER_TYPE}`} >
                            {/* <div className={`blur position-${config.HEADER_TYPE}`} style={{ "backgroundImage": `url('${Banner}')` }}></div> */}
                            <video width="100%" height="100%" loop muted autoPlay className='homeVideo' id='bannerVideo'>
                                <source type="video/mp4" src={BannerVideo} />
                            </video>
                        </div>
                        {/*<div className="bannerLogo position-absolute top-50 start-50 translate-middle "><img src={BannerLogo} alt="Banner Logo" /></div>*/}
                    </div>
                </div>
            }
        </>
    )
}
