import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import axios from 'axios';
import Logo from '../Assets/logof.png';
import { Button } from '../Button/Button';


export const Footer = () => {
  const URL = "https://eliteblue.net/webcms/public/";
  const [isLoading, setIsLoading] = useState(false);
  const [actualData, setData] = useState("Success!");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    setIsLoading(true)

    data = JSON.stringify(data);
    console.log(data);

    // const fetchData = async () => {
    const response = await axios({
      url: `${URL}api/newsletter-subscribe`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: data
    })
      .then(response => {
        reset();
        setData(response.data.message);
        if (response.data.success) {
          toast.success(response.data.message);
        }
        else {
          toast.error(response.data.message);
        }
      });
    setIsLoading(false);
    return response;
    // };

    // toast.promise(
    //   fetchData(),
    //   {
    //     loading: 'loading...',
    //     success: actualData,
    //     error: "Something went wrong!",
    //   }
    // );

    // fetch(`${URL}api/newsletter-subscribe`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: data
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     if (json.success) {
    //       toast.success(json.message);
    //     }
    //     else {
    //       toast.error(json.message);
    //     }
    //     setIsLoading(false);

    //   }).catch(err => {
    //     toast.error("Something Went Wrong!");
    //     setIsLoading(false);
    //   })
  };
  return (
    <footer className="main-footer normal-padding position-relative overflow-hidden">
      <div className="container">

        <section className="section">
          <div className="circle"></div>
          <div className="circle circle-1"></div>
          <div className="row">

            <div className="column col-xl-4 col-lg-5 col-md-5 col-sm-12">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link to="/"><img id="fLogo" src={Logo} alt="" /></Link>
                  </div>
                  <div className="text">
                    Elite Blue Technologies is a team of dedicated designers, developers, content creators, SEO specialists, digital marketers, and other experts who share a common passion for great brands
                  </div>
                  <div className="mt-3">
                    <Button text="Get in Touch" type="light" link="/contact" />
                  </div>
                  {/*<div className="info-widget">*/}
                  {/*  <ul className="contact-info">*/}
                  {/*    <li><span className="icon flaticon-call"></span><a href="tel:+923118091779">+92 311 809 1779</a></li>*/}
                  {/*    <li><span className="icon flaticon-email-2"></span><a href="mailto:info@eliteblue.net">info@eliteblue.net</a></li>*/}
                  {/*    <li className="address"><span className="icon flaticon-pin-1"></span> Shahrah-e-Faisal Rd. P.E.C.S.H Block 6, Karachi, Pakistan.</li>*/}
                  {/*  </ul>*/}
                  {/*</div>*/}

                </div>
              </div>
            </div>

            {/* <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget info-widget">
                <div className="widget-content">
                  <h6>Contact</h6>
                  <ul className="contact-info">
                    <li className="address"><span className="icon flaticon-pin-1"></span> 66 Broklyn Street,
                      New York <br />United States of America</li>
                    <li><span className="icon flaticon-call"></span><a href="tel:666888000">666 888
                      000</a></li>
                    <li><span className="icon flaticon-email-2"></span><a href="mailto:needhelp@linoor.com">needhelp@linoor.com</a></li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="column col-xl-2 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget links-widget">
                <div className="widget-content">
                  <h6 class="mb-4 mt-md-0 mt-4">Site Map</h6>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <ul>
                        <li><Link to="about">About</Link></li>
                        {/*<li><Link to="#">Servies</Link></li>*/}
                        <li><Link to="portfolio">Portfolio</Link></li>
                        <li><Link to="blog">Blog</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget links-widget">
                <div className="widget-content">
                  <h6 className="mb-4 mt-md-0 mt-4">Services</h6>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <ul>
                        <li><Link to="branding-and-design">Creative Branding & Design</Link></li>
                        {/*<li><Link to="#">Servies</Link></li>*/}
                        <li><Link to="web-development">Web Development</Link></li>
                        <li><Link to="android-development">Mobile Application Development</Link></li>
                        {/*<li><Link to="contact">Blogs</Link></li>*/}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div className="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget newsletter-widget">
                <div className="widget-content">
                  <h6>Newsletter</h6>
                  <div className="newsletter-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Email Address" className={`light ${errors.email && "form-control is-invalid"}`}  {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                        <button type="submit" className="theme-btn">


                          {isLoading ?
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                            : <span className="fa fa-envelope"></span>}

                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="py-md-2 py-4">
                    <h6 class="m-0">Follow US</h6>
                    <ul className="social-links py-2">
                      <li><a target={'_blank'} href="https://www.facebook.com/elitebluetechnologies"><span className="fab fa-facebook-square"></span></a></li>
                      <li><a target={'_blank'} href="https://twitter.com/EliteBlueTechn1"><span className="fab fa-twitter"></span></a></li>
                      <li><a target={'_blank'} href="https://www.instagram.com/elitebluetechnologies/"><span className="fab fa-instagram"></span></a></li>
                    </ul>
                  </div>

                  {/*<div className="text">Our latest news, articles, and resources, we will sent to your inbox weekly.</div>*/}
                </div>
              </div>
            </div>

          </div>

        </section>
      </div>


      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner">
            <div className="copyright">© 2023 All Rights Reserved. Powered By Elite Blue Technologies</div>
          </div>
        </div>
      </div>

    </footer>
  )
}
