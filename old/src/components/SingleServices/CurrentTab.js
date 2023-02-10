import React from 'react'
import { Link } from 'react-router-dom'

export const CurrentTab = ({ currentPage }) => {
    return (
        <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
            <aside class="sidebar blog-sidebar">

                <div class="sidebar-widget services">
                    <div class="widget-inner">
                        <div class="sidebar-title">
                            <h4>All Services</h4>
                        </div>
                        <ul>
                            <li class={`${currentPage === "web" && "active"}`}><Link to="web-development.html">Website Development</Link></li>
                            <li class={`${currentPage === "graphics" && "active"}`}><Link to="graphic-designing.html">Graphic Designing</Link></li>
                            <li class={`${currentPage === "market" && "active"}`}><Link to="digital-marketing.html">Digital Marketing</Link></li>
                            <li class={`${currentPage === "writing" && "active"}`}><Link to="seo.html">SEO & Content Writting</Link></li>
                            <li class={`${currentPage === "app" && "active"}`}><Link to="app-development.html">App Development</Link></li>
                            <li class={`${currentPage === "uiux" && "active"}`}><Link to="ui-designing.html">UI/UX Designing</Link></li>
                        </ul>
                    </div>
                </div>

                <div class="sidebar-widget call-up">
                    <div class="widget-inner">
                        <div class="sidebar-title">
                            <h4>Need EliteBlue's help?</h4>
                        </div>
                        <div class="para    "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla provident tempora,
                            dolor repudiandae quaerat,.</div>
                        <div class="phone"><a href="tel:000000"><span
                            class="icon flaticon-call"></span>666 888 000</a></div>
                    </div>
                </div>
            </aside>
        </div>
    )
}
