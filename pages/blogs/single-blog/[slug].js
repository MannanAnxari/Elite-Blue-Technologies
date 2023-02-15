import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router'
import Head from 'next/head';
import Layout from '@/pages/Layout';
import Image from 'next/image';

export default function SingleBlog() {

    const router = useRouter();
    const [blog, setBlog] = useState([]);


    useEffect(() => {

        const res = fetch(`https://eliteblue.net/e-panel/api/single-blog/${router.query.slug}`).then(responece => responece.json()).then((data) => {
            setBlog(data);

        }).catch((err) => {
            toast.error("Something went wrong");
        });

    }, []);




    return (
        <>
            <Layout title={`${router.query.slug} - Elite Blue Technologies`} metaTitle="Elite Blue Technologies" metaDescription="At Elite Blue Technologies, our focus is on delivering results for our clients. As an expert digital agency, we specialize in building brands and attracting customers, not just making empty promises. Let us help you grow your business through creative and effective digital solutions.">
                {/* <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}> */}
                <div className='sec py-5'>
                    {blog.data ?
                        <div className="container text-start">
                            <div className="row">
                                <div className="col-md-6 my-3">
                                    <Image fill={true} className='w-100 h-100 position-relative rounded-4' src={`${blog.media_path}/${blog.data.image}`} alt="singleBlog" />
                                </div>
                                <div className="col-md-6 my-md-auto my-3">
                                    <h6 className="heading mb-3" >
                                        {blog.data.title}
                                    </h6>
                                    <p className="para-sm" dangerouslySetInnerHTML={{ __html: blog.data.short_description }}>
                                    </p>
                                </div>
                                <div className="col-md-12 my-3">
                                    <p className="para-sm" dangerouslySetInnerHTML={{ __html: blog.data.long_description }}>
                                    </p>
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
                {/* </motion.div> */}
            </Layout>
        </>
    )
}


// export async function getServerSideProps(}) {
//     // const res = await fetch(`https://eliteblue.net/e-panel/api/single-blog/${params.slug}`)
//     // let data = await res.json()

//     return {
//         props: { title: `${params.slug} - Elite Blue Technologies` },
//     }
// }
// export async function getStaticProps(context) {

//     return {
//         props: {
//             title: "",
//             metaTitle: "Elite Blue Technologies",
//             metaKeywords: "",
//             metaDescription: "At Elite Blue Technologies, our focus is on delivering results for our clients. As an expert digital agency, we specialize in building brands and attracting customers, not just making empty promises. Let us help you grow your business through creative and effective digital solutions.",
//         },
//     }
// }
