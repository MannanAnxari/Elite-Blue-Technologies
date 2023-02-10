import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from '../Portfolio.json';
import './Portfolio.css';
import { PortfolioItems } from './PortfolioItems';
import { PortfolioFilter } from './PortfolioFilter';
import { toast } from 'react-hot-toast';



export const Portfolio = () => {

    const [items, setItems] = useState(PortfolioItem);

    const filterItems = (category) => {
        console.log("Out");
        // if (category === "all") {
        //     setItems(PortfolioItem);
        // }
        // else {
        //     const updatedItems = PortfolioItem.filter((currElem) => {
        //         return currElem.filter === category;
        //     });
        //     setItems(updatedItems);

        // }
    }



    const [filtered, setFiltered] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [fltr, setfltr] = useState([]);


    const [img, setImg] = useState(null);

    useEffect(() => {
        fetch(`https://eliteblue.net/e-panel/api/portfolio`)
            .then((response) => response.json())
            .then((actualData) => { setFiltered(actualData.data); setfltr(actualData.data); setImg(actualData.media_path) })
            .catch((err) => {
                setFiltered([]);
                toast.error("Something went wrong!");
            });
    }, []);



    let filteredItm = fltr.map((item) => {
        return item.category
    })


    var tempData = [];
    // console.log([...new Set(filteredItmFilter.flat())].length);
    for (var index = 0; index < [...new Set(filteredItm.flat())].length; index++) {
        var aa = { "link": `${[...new Set(filteredItm.flat())][index]}` };
        tempData.push(aa);
    }


    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            <section className="section  portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="head">
                                {/*<h4 className="heading-sm">Portfolio</h4>*/}
                                <h2 className="heading">OUR RECENT WORK
                                    <span className="dot">.</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <section className="gallery-section">
                        <div className="auto-container">
                            <div className="mixitup-gallery">
                                <PortfolioFilter filterItems={filterItems}
                                    all={fltr}
                                    setFiltered={setFiltered}
                                    activeFilter={activeFilter}
                                    setActiveFilter={setActiveFilter}
                                    filtered={filtered}
                                    tempData={tempData}
                                />
                                <PortfolioItems PortfolioItem={filtered} img={img} />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </motion.div>
    )
}
