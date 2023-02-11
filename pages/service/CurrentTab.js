import React from 'react'
import Link from 'next/link'

export default function CurrentTab({ currentPage }) {
    return (
        <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <aside className="sidebar blog-sidebar">

                <div className="sidebar-widget services">
                    <div className="widget-inner">
                        <div className="sidebar-title">
                            <h4>All Services</h4>
                        </div>
                        <ul>
                            <li class={`${currentPage === "web" && "active"}`}><Link href="web-development.html">Website Development</Link></li>
                            <li class={`${currentPage === "graphics" && "active"}`}><Link href="graphic-designing.html">Graphic Designing</Link></li>
                            <li class={`${currentPage === "market" && "active"}`}><Link href="digital-marketing.html">Digital Marketing</Link></li>
                            <li class={`${currentPage === "writing" && "active"}`}><Link href="seo.html">SEO & Content Writting</Link></li>
                            <li class={`${currentPage === "app" && "active"}`}><Link href="app-development.html">App Development</Link></li>
                            <li class={`${currentPage === "uiux" && "active"}`}><Link href="ui-designing.html">UI/UX Designing</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="sidebar-widget call-up">
                    <div className="widget-inner">
                        <div className="sidebar-title">
                            <h4>Need EliteBlue's help?</h4>
                        </div>
                        <div className="para    "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla provident tempora,
                            dolor repudiandae quaerat,.</div>
                        <div className="phone"><a href="tel:000000"><span
                            className="icon flaticon-call"></span>666 888 000</a></div>
                    </div>
                </div>
            </aside>
        </div>
    )
}
