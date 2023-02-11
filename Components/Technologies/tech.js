import React from 'react';
// import './Tech.css';
import WP from '../../public/Assets/Tech/wp.png';
import Shopify from '../../public/Assets/Tech/shop.png';
import Web from '../../public/Assets/Tech/web.png';
import Js from '../../public/Assets/Tech/js.png';
import PHP from '../../public/Assets/Tech/php.png';
import Laravel from '../../public/Assets/Tech/laravel.png';
import MySql from '../../public/Assets/Tech/mySql.png';
import Sql from '../../public/Assets/Tech/sql.png';
import ReactNative from '../../public/Assets/Tech/reactNative.png';
import Flutter from '../../public/Assets/Tech/flutter.png';
import ReactJs from '../../public/Assets/Tech/react.png';
import Solidity from '../../public/Assets/Tech/sol.png';
import Image from 'next/image';

const Tech = () => {
    return (
        <div className='row'>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={WP} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={Shopify} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={Web} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={Js} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={PHP} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={Laravel} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={MySql} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={Sql} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={ReactNative} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={Flutter} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={ReactJs} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <Image src={Solidity} alt="Tech" className='w-100 h-100' draggable="false" />
                </div>
            </div>
        </div>
    )
}
export default Tech