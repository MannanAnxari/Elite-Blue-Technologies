import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import { BlogItem } from '@/Components/BlogItem/BlogItem';

function Blog({ data, title }) {

    const [blog, setBlog] = useState({ data: [] })
    useEffect(() => {
        if (data) {
            setBlog(data)
        }
    }, [])


    // var date = new Date(item.updated_at);
    // const monthNames = ["January", "February", "March", "April", "May", "June",
    //     "July", "August", "September", "October", "November", "December"
    // ];


    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            {/* <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}> */}
                <div className="sec py-5 blog  ">
                    <div className="container">
                        {
                            blog.data ?
                                <div className="row">
                                    <div className="col-12">

                                        <h2 className='heading'>Our Latest Blogs<span className="dot">.</span></h2>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div className="row">
                                            {blog.data.map((item) => {
                                                return <BlogItem item={item} key={item.id} img={`${blog.media_path}`} />
                                            })}
                                            {/* {blog.data.map((item) => {
                                                return <div className="news-block col-lg-4 col-md-6 col-sm-12 fadeInUp" key={item.id}>das
                                                    <div className="inner-box">
                                                        <div className="image-box">
                                                            <Link href={`single-blog/${item.slug}`}><img src={`${blog.media_path}/${item.image}`} alt={`${item.title}`} /></Link>
                                                        </div>
                                                        <div className="lower-box">
                                                            <div className="post-meta">
                                                                <ul>
                                                                    <li><span className="far fa-clock"></span> {`${date.getDate()} ${monthNames[date.getMonth()].slice(0, 3)}`}</li>
                                                                    <li><span className="far fa-user-circle"></span> Admin</li>
                                                                </ul>
                                                            </div>
                                                            <h5 className='heading'><Link href={`single-blog/${item.slug}`}>{item.title}</Link></h5>
                                                            <div className="para" dangerouslySetInnerHTML={{ __html: item.short_description }}></div>
                                                            <div className="link-box"><Link className="theme-btn" href={`single-blog/${item.slug}`}><span className="flaticon-next-1"></span></Link></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })} */}
                                        </div>
                                    </div>
                                </div> :
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            {/* </motion.div> */}
        </>
    )
}

export default Blog

export async function getStaticProps(context) {

    const res = await fetch('https://eliteblue.net/e-panel/api/blogs')
    let data = await res.json();

    return {
        props: { data, title: "Blog - Elite Blue Technologies" },
    }
}
