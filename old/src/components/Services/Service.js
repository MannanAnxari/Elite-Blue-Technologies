import React from 'react';
import './Services.css';
import AngleRight from '../Assets/angleRight.png';


export default function Service({ title, description, image, link }) {
    return (
        <div className={`col-12 text-center my-4 services-card`}>
            <div className="row">
                <div className="col-12">
                    <div className="bottom-curve"></div>
                </div>
                <div className="col-md-6 col-12 my-auto">
                    <img src={image} alt="Services" className='ServicesImg' draggable="false" />
                </div>
                <div className="col-md-6 col-12 my-auto">
                    <div className='px-md-4 px-0'>
                        <h1 className="heading gradiant">{title}</h1>
                        <p className="para">
                            {description}
                        </p>
                        <div className="link-box">
                            <a href={link}>
                                <span className=""> <img src={AngleRight} alt="Angle" className='angle' /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
