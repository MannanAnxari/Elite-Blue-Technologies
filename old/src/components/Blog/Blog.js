import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast';
import { BlogItem } from './BlogItem';
import './Blog.css';

export const Blog = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);

    useEffect(() => {
        fetch(`https://eliteblue.net/e-panel/api/blogs`)
            .then((response) => response.json())
            .then((actualData) => { setData(actualData.data); setIsLoading(false); setImg(actualData.media_path); })
            .catch((err) => {
                setData([]);
                toast.error("Something went wrong!")
                setIsLoading(false);
            }
            );
    }, []);


    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <div className="sec py-5 blog  ">
                <div className="container">
                    {
                        data.length >= 1 &&

                        <div className="row">
                            <div className="col-12">

                                <h2 className='heading'>Our Latest Blogs<span class="dot">.</span></h2>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <div className="row">
                                    {data.map((item) => {
                                        return <BlogItem item={item} img={img} />
                                    })}
                                </div>
                            </div>
                        </div>}
                    {isLoading &&
                        <div className="row">
                            <div className="col-12 text-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </motion.div>
    )
}
