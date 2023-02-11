import Link from 'next/link';
import React from 'react';
// import './Buttons.css';

export const Button = ({ link, text, type, icon }) => {
    return (
        <Link class={`theme-btn btn-style-${type === "dark" ? "one" : type === "light" ? "two" : type === "white" ? "four" : "three"}`} href={link ? link : "#"}>
            <i className="btn-curve"></i>
            <span className="btn-title">{text}{icon && " >"}</span>
        </Link>
    )
}
