import Image from 'next/image';
import React from 'react'

export const PortfolioItems = ({ PortfolioItem, img }) => {
    console.log(img, PortfolioItem);
    return (
        <div className="filter-list row">
            {PortfolioItem.map((item) => {
                return <div className={`gallery-item mix ${item.filter} col-lg-4 col-md-6 col-sm-12`} key={item.id}>
                    <div className="inner-box">
                        <figure className="image"><Image src={`${img}/${item.image}`} alt="" className='w-100 h-100 position-relative' fill={true} /></figure>
                        <a href={`${img}/${item.image}`} className="lightbox-image overlay-box" target='_blank'></a>
                        <div className="cap-box">
                            <div className="cap-inner">
                                <div className="cat"><span>{item.category}</span></div>
                                <div className="title">
                                    <h5><a href={item.portfolio_url}>{item.title}</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}
