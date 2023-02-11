import React from 'react';
import { Button } from '../Button/Button';
// import './LetsTalk.css';

export default function LetsTalk() {
    return (
        <section className="call-to-section">
            <div className="container">
                <div className="inner">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <h3 className='heading-sm text-light'>Let's Get Started!</h3>
                    <h2>We Enjoy Listening To<br /> Your Needs!</h2>
                    <div className="link-box">
                        <Button text="Estimate Project" type="light" link="/contact" icon={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}
