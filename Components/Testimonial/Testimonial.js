import React from 'react'
import serviceone from "../Assets/graphics.png";
export const Testimonial = () => {

    return (
        <>


            <div className="container">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active gtco-testimonials">
                            <div>
                                <div className="card text-center">
                                    <Image fill={true} className='w-100 h-100 position-relative card-img-top' src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                    <div className="card-body">
                                        <h5>Ronne Galle 1<br />
                                            <span> Project Manager </span>
                                        </h5>
                                        <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                            impedit quo minus id quod maxime placeat ” </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  gtco-testimonials">
                            <div>
                                <div className="card text-center">
                                    <Image fill={true} className='w-100 h-100 position-relative card-img-top' src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                    <div className="card-body">
                                        <h5>Ronne Galle 2<br />
                                            <span> Project Manager </span>
                                        </h5>
                                        <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                            impedit quo minus id quod maxime placeat ” </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item  gtco-testimonials">
                            <div>
                                <div className="card text-center">
                                    <Image fill={true} className='w-100 h-100 position-relative card-img-top' src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                                    <div className="card-body">
                                        <h5>Ronne Galle 3<br />
                                            <span> Project Manager </span>
                                        </h5>
                                        <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                            impedit quo minus id quod maxime placeat ” </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <div className="gtco-testimonials">
                <h2>Testimonials Carousel - Cards Comments</h2>
                <div className="owl-carousel owl-carousel1 owl-theme">
                    <div>
                        <div className="card text-center">
                            <img className="card-img-top" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
                            <div className="card-body">
                                <h5>Ronne Galle <br />
                                    <span> Project Manager </span>
                                </h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit quo minus id quod maxime placeat ” </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301" alt="" />
                            <div className="card-body">
                                <h5>Missy Limana<br />
                                    <span> Engineer </span>
                                </h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit quo minus id quod maxime placeat ” </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302" alt="" />
                            <div className="card-body">
                                <h5>Martha Brown<br />
                                    <span> Project Manager </span>
                                </h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit quo minus id quod maxime placeat ” </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="card text-center"><img className="card-img-top" src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303" alt="" />
                            <div className="card-body">
                                <h5>Hanna Lisem<br />
                                    <span> Project Manager </span>
                                </h5>
                                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                    impedit quo minus id quod maxime placeat ” </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
