import Link from 'next/link';
import Image from 'next/image';
import React from 'react';


export const BlogItem = ({ item, img }) => {

    var date = new Date(item.updated_at);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <>
            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-3 text-start">
                <div className="card rounded-4 overflow-hidden shadow">
                    <img src={`${img}/${item.image}`} className="card-img-top" alt="blog" />
                    <div className="card-body my-3">
                        <h6 className="card-title">{item.title}</h6>
                        <p className="my-3 text-danger fs-smm">
                            {new Date(item.updated_at).toLocaleString("en-us")}
                        </p>
                        <p className="card-text para-sm fs-smm text-muted" dangerouslySetInnerHTML={{ __html: item.short_description }}>
                        </p>
                        <Link to={`/blog/${item.slug}`} className="text-danger">Read More ↗</Link>
                    </div>
                </div>
            </div> */}

            <div className="news-block col-lg-4 col-md-6 col-sm-12 fadeInUp">
                <div className="inner-box">
                    <div className="image-box">
                        <Link href={`/blogs/single-blog/${item.slug}`}><Image src={`${img}/${item.image}`} alt={`${item.title}`} className='w-100 h-100 position-relative' style={{

                        }} fill={true} /></Link>
                    </div>
                    <div className="lower-box">
                        <div className="post-meta">
                            <ul>
                                <li><span className="far fa-clock"></span> {`${date.getDate()} ${monthNames[date.getMonth()].slice(0, 3)}`}</li>
                                <li><span className="far fa-user-circle"></span> Admin</li>
                            </ul>
                        </div>
                        <h5 className='heading'><Link href={`/blogs/single-blog/${item.slug}`}>{item.title}</Link></h5>
                        <div className="para" dangerouslySetInnerHTML={{ __html: item.short_description }}></div>
                        <div classNam e="link-box"><Link className="theme-btn" href={`/blogs/single-blog/${item.slug}`}><span className="flaticon-next-1"></span></Link></div>
                    </div>
                </div>
            </div>
        </>
    )
}
