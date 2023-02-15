import React, { useEffect, useState } from 'react'
import shape1 from '@/public/Assets/team-shape-5.1.png'
import shape2 from '@/public/Assets/team-shape-5.2.png'
const Team = ({ team, img }) => {

    const [teams, setTeams] = useState([]);
    const [teamsImgPath, setTeamsImgPath] = useState("");


    useEffect(() => {
        setTeams(team);
        setTeamsImgPath(img);
    }, []);


    return (
        <>
            {teams?.length > 0 &&
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
                                            return <div className="col-xl-3 col-lg-3 col-md-6 teams-card my-3 gallery-item">

                                                <div className="tpteam mb-30">

                                                    <div className="tpteam__shape-1">
                                                        <Image fill={true} className='w-100 h-100 position-relative shape-1' src={shape1} alt="" />
                                                    </div>
                                                    <div className="tpteam__shape-2">
                                                        <Image fill={true} className='w-100 h-100 position-relative ' src={shape2} alt="" />
                                                    </div>

                                                    <div className="tpteam__thumb">
                                                        <Image fill={true} className='w-100 h-100 position-relative' src={`${teamsImgPath}/${item.image}`} alt="" />
                                                    </div>

                                                    <div className="tpteam__content">

                                                        <h3 className="tp-team-sm-title"><a target={'_blank'} href={`//github.com/${item.name}`}>{item.name}</a></h3>
                                                        <h5 className="tp-team-sm-subtitle">
                                                            <a href="//github.com/">{item.designation}</a>
                                                        </h5>
                                                    </div>
                                                    <div className="cap-box">
                                                        <div className="cap-inner">
                                                            <div className="cat">
                                                                <span>{item.designation}</span>
                                                            </div>
                                                            <div className="title">
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

                                    {/* <div className="col-xl-3 col-lg-3 col-md-6 teams-card my-3 gallery-item">

                                        <div className="tpteam mb-30">

                                            <div className="tpteam__shape-1">
                                                <img className='shape-1' src={shape1} alt="" />
                                            </div>
                                            <div className="tpteam__shape-2">
                                                <img src={shape2} alt="" />
                                            </div>

                                            <div className="tpteam__thumb">
                                                <img className="w-100" src="https://weblearnbd.net/wp/collax/wp-content/uploads/2022/10/team-8.jpg" alt="" />
                                            </div>

                                            <div className="tpteam__content">

                                                <h3 className="tp-team-sm-title"><a href="//github.com/">Alextina Derex</a></h3>
                                                <h5 className="tp-team-sm-subtitle">
                                                    <a href="//github.com/">UI/UX Designer</a>
                                                </h5>
                                            </div>
                                            <div className="cap-box">
                                                <div className="cap-inner">
                                                    <div className="cat">
                                                        <span>UI/UX Designer</span>
                                                    </div>
                                                    <div className="title">
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

export default Team




export async function getStaticProps(context) {

    const res = await fetch(`https://eliteblue.net/e-panel/public/api/team-member`)
    let data = await res.json();

    return {
        props: { team: data.team, img: data.media_path },
    }
}
