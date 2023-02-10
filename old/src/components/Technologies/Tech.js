import React from 'react';
import './Tech.css';
import WP from '../Assets/Tech/wp.png';
import Shopify from '../Assets/Tech/shop.png';
import Web from '../Assets/Tech/web.png';
import Js from '../Assets/Tech/js.png';
import PHP from '../Assets/Tech/php.png';
import Laravel from '../Assets/Tech/laravel.png';
import MySql from '../Assets/Tech/mySql.png';
import Sql from '../Assets/Tech/sql.png';
import ReactNative from '../Assets/Tech/reactNative.png';
import Flutter from '../Assets/Tech/flutter.png';
import ReactJs from '../Assets/Tech/react.png';
import Solidity from '../Assets/Tech/sol.png';

export const Tech = () => {
    return (
        <div className='row'>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={WP} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={Shopify} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={Web} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={Js} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={PHP} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={Laravel} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={MySql} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={Sql} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={ReactNative} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={Flutter} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={ReactJs} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-xs-4 col-4">
                <div className="technologiesImg">
                    <img src={Solidity} alt="Tech" className='w-100' draggable="false" />
                </div>
            </div>
        </div>
    )
}
