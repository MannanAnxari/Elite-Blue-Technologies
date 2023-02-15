import React, { useState, useEffect } from 'react';
// import './Header.css';
import Logo from '../Assets/logo.png';
import Close from '../Assets/Close.png';
import { Button } from '../Button/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
    const [isActive, setActive] = useState(false);
    const { pathname } = useRouter();

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
                            <div className="logo"><Link href="/" ><Image
                                src={Logo} id="thm-logo" className='w-auto' alt="EliteBlue Technologies - Software Company"
                            /></Link></div>
                        </div>

                        <div className="nav-outer">

                            <div className="mobile-nav-toggler" onClick={toggleClass}><span className="icon flaticon-menu-2"></span><span className="txt">Menu</span></div>

                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                    <ul className="navigation">
                                        <li><Link
                                            href="/">Home</Link>
                                        </li>
                                        <li><Link href="/about">About</Link>
                                        </li>
                                        <li><Link href="/portfolio">Portfolio</Link>
                                        </li>
                                        {/* <li><Link href="blog">Blog</Link>
                                        </li> */}
                                        <li className="dropdown"><a href="#">Services</a>
                                            <ul>
                                                <li><Link href="/service/branding-and-designing">Creative Branding &amp; Design</Link></li>
                                                <li><Link href="/service/web-development">Web Development</Link></li>
                                                <li><Link href="/service/app-development">Mobile Application Development</Link></li>
                                                <li><Link href="/service/e-commerce-development">Ecommerce Software Development</Link></li>
                                                <li><Link href="/service/digital-marketing">Digital Marketing - SEO, PPC, SMM</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact us</Link>
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
                        <a className="side-menu__toggler side-menu__close-btn" onClick={() => setActive(false)}><Image src={Close} alt="" fill={true} className='w-100 h-100 position-relative' /></a>
                    </div>

                    <nav className="mobile-nav__container">
                        <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                            <ul className="navigation">
                                <li><Link href="/">Home</Link>
                                </li>
                                <li><Link href="/about">About</Link>
                                </li>
                                <li><Link href="/portfolio">Portfolio</Link>
                                </li>
                                {/* <li><Link href="blog">Blog</Link>
                                </li> */}
                                <li className="dropdown">
                                    <a>Services<div className="dropdown-btn"><span className="fa fa-angle-right"></span></div></a>
                                    <ul>
                                        <li><Link href="/service/branding-and-designing">Creative Branding &amp; Design</Link></li>
                                        <li><Link href="/service/web-development">Web Development</Link></li>
                                        <li><Link href="/service/app-development">Mobile Application Development</Link></li>
                                        <li><Link href="/service/e-commerce-development">Ecommerce Software Development</Link></li>
                                        <li><Link href="/service/digital-marketing">Digital Marketing - SEO, PPC, SMM</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="contact">Contact us</Link>
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
