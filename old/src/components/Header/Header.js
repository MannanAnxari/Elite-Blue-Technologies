import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from '../Assets/logo.png';
import Close from '../Assets/Close.png';
import { Button } from '../Button/Button';
import { Link, useLocation } from 'react-router-dom';
import { useScroll } from 'framer-motion';


export const Header = () => {
    const [isActive, setActive] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setActive(false);
    }, [pathname]);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header className="main-header header-style-one">

                <div className="header-upper">
                    <div className="inner-container ">

                        <div className="logo-box">
                            <div className="logo"><Link to="/" ><img
                                src={Logo} id="thm-logo" alt="EliteBlue Technologies - Software Company"
                            /></Link></div>
                        </div>

                        <div className="nav-outer">

                            <div className="mobile-nav-toggler" onClick={toggleClass}><span className="icon flaticon-menu-2"></span><span className="txt">Menu</span></div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                    <ul className="navigation">
                                        <li><Link
                                            to="/">Home</Link>
                                        </li>
                                        <li><Link to="about">About</Link>
                                        </li>
                                        <li><Link to="portfolio">Portfolio</Link>
                                        </li>
                                        {/* <li><Link to="blog">Blog</Link>
                                        </li> */}
                                        <li className="dropdown"><a to="#">Services</a>
                                            <ul>
                                                <li><Link to="branding-and-design">Creative Branding &amp; Design</Link></li>
                                                <li><Link to="web-development">Web Development</Link></li>
                                                <li><Link to="ecommerce-development">Ecommerce Software Development</Link></li>
                                                <li><Link to="digital-marketing">Digital Marketing - SEO, PPC, SMM</Link></li>
                                                <li><Link to="android-development">Mobile Application Development</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="contact">Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className="other-links">
                            <div className="link-box">
                                <div className="call-us">
                                    <Button text="get a quote" link="/contact" type="dark" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div class={`side-menu__block ${isActive ? "active" : ""}`}>
                <div className="side-menu__block-overlay custom-cursor__overlay" onClick={() => setActive(false)}>
                </div>
                <div className="side-menu__block-inner">
                    <div className="side-menu__top justify-content-end">
                        <a className="side-menu__toggler side-menu__close-btn" onClick={() => setActive(false)}><img src={Close} alt="" /></a>
                    </div>

                    <nav className="mobile-nav__container">
                        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                            <ul className="navigation">
                                <li><Link to="/">Home</Link>
                                </li>
                                <li><Link to="about">About</Link>
                                </li>
                                <li><Link to="portfolio">Portfolio</Link>
                                </li>
                                {/* <li><Link to="blog">Blog</Link>
                                </li> */}
                                <li className="dropdown">
                                    <a>Services<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></a>
                                    <ul>
                                        <li><Link to="branding-and-design">Creative Branding &amp; Design</Link></li>
                                        <li><Link to="web-development">Web Development</Link></li>
                                        <li><Link to="ecommerce-development">Ecommerce Software Development</Link></li>
                                        <li><Link to="digital-marketing">Digital Marketing - SEO, PPC, SMM</Link></li>
                                        <li><Link to="android-development">Mobile Application Development</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="contact">Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="side-menu__sep"></div>
                    <div className="side-menu__content">
                        <p>We are a prominent software development business focused on enterprise solutions and outsourced product development, offering professional IT solutions to our global clientele.</p>
                        {/* <p><a href="mailto:info@eliteblue.net">info@eliteblue.net</a> <br /> <a href="tel:+923118091779">+92 311 809 1779</a></p> */}
                        <div className="side-menu__social mt-5">
                            <a target={'_blank'} href="https://www.facebook.com/elitebluetechnologies"><i className="fab fa-facebook-square"></i></a>
                            <a target={'_blank'} href="https://twitter.com/EliteBlueTechn1"><i className="fab fa-twitter"></i></a>
                            <a target={'_blank'} href="https://www.instagram.com/elitebluetechnologies/"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
