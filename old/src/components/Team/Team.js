import React, { useContext } from 'react'
import "./Team.css";
import shape1 from './../Assets/team-shape-5.1.png'
import shape2 from './../Assets/team-shape-5.2.png'
import { AppContext } from '../context/AppContext';

export const Team = () => {
    const { teams, teamsImgPath } = useContext(AppContext);

    return (
        <>
            {teams.length > 0 &&
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mb-md-5 mb-3">
                                <h1 className="heading">
                                    People are the key to success
                                    <span className='text-main'>.</span>
                                </h1>
                            </div>
                            <div className="col-12">
                                <div className="row mx-auto w-100">
                                    {

                                        teams.map((item) => {
                                            return <div class="col-xl-3 col-lg-3 col-md-6 teams-card my-3 gallery-item">

                                                <div class="tpteam mb-30">

                                                    <div class="tpteam__shape-1">
                                                        <img className='shape-1' src={shape1} alt="" />
                                                    </div>
                                                    <div class="tpteam__shape-2">
                                                        <img src={shape2} alt="" />
                                                    </div>

                                                    <div class="tpteam__thumb">
                                                        <img class="w-100" src={`${teamsImgPath}/${item.image}`} alt="" />
                                                    </div>

                                                    <div class="tpteam__content">

                                                        <h3 class="tp-team-sm-title"><a target={'_blank'} href={`//github.com/${item.name}`}>{item.name}</a></h3>
                                                        <h5 class="tp-team-sm-subtitle">
                                                            <a href="//github.com/">{item.designation}</a>
                                                        </h5>
                                                    </div>
                                                    <div class="cap-box">
                                                        <div class="cap-inner">
                                                            <div class="cat">
                                                                <span>{item.designation}</span>
                                                            </div>
                                                            <div class="title">
                                                                <h5>
                                                                    <a>{item.name}</a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }

                                    {/* <div class="col-xl-3 col-lg-3 col-md-6 teams-card my-3 gallery-item">

                                        <div class="tpteam mb-30">

                                            <div class="tpteam__shape-1">
                                                <img className='shape-1' src={shape1} alt="" />
                                            </div>
                                            <div class="tpteam__shape-2">
                                                <img src={shape2} alt="" />
                                            </div>

                                            <div class="tpteam__thumb">
                                                <img class="w-100" src="https://weblearnbd.net/wp/collax/wp-content/uploads/2022/10/team-8.jpg" alt="" />
                                            </div>

                                            <div class="tpteam__content">

                                                <h3 class="tp-team-sm-title"><a href="//github.com/">Alextina Derex</a></h3>
                                                <h5 class="tp-team-sm-subtitle">
                                                    <a href="//github.com/">UI/UX Designer</a>
                                                </h5>
                                            </div>
                                            <div class="cap-box">
                                                <div class="cap-inner">
                                                    <div class="cat">
                                                        <span>UI/UX Designer</span>
                                                    </div>
                                                    <div class="title">
                                                        <h5>
                                                            <a>Alextina Derex</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}
