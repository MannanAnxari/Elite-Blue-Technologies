import React, { useState, useEffect } from 'react'

export const PortfolioFilter = ({ activeFilter, setActiveFilter, setFiltered, all, filtered, tempData }) => {

    const [isActive, setIsActive] = useState(false);
    // const links = [{ 'link': "All", "category": "all" }, { 'link': "WEB APPLICATIONS", "category": "web" }, { 'link': "MOBILE APPLICATION", "category": "app" }, { 'link': "GRAPHIC DESIGN", "category": "graphics" }, { 'link': "BLOCKCHAIN NFT", "category": "nft" }];




    const links = tempData;


    const [active, setActive] = useState(null);
    useEffect(() => {
        if (activeFilter === 0) {
            setFiltered(all)
            return
        }
        const filtered = all.filter(items => {
            if (activeFilter === "all") {
                return all
            }
            else {
                return items.category === activeFilter
            }
        });
        setFiltered(filtered);
    }, [])

    const handleFilter = ({ link }) => {
        setActive(link);
        setActiveFilter(link);

        const filtered = all.filter(items => {
            if (activeFilter === "all") {
                return all
            }
            else {
                return items.category === link
            }
        });
        setFiltered(filtered);
    }
    return (
        <div className="filters">
            <ul className='filter-tabs filter-btns'>
                {links.map((link) => {
                    return <li class={`filter ${active == link.link && 'active'} filtertabs`} onClick={() => handleFilter(link)}>{link.link}</li>
                })}
            </ul>
        </div>

    )
}



