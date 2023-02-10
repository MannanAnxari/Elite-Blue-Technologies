import React, { useState } from 'react';
import ContactImg from '../Assets/Contact/banner.png';
import { motion } from 'framer-motion';
import './Contact.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import email from "../Assets/email0.png";
import phone from "../Assets/phone0.png";
import address from "../Assets/location0.png";


export const Contact = () => {
    return (
        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
            {/* <section className="section contact main__form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact__content">
                                <div className="head">
                                    <h2 className='heading'>Fill out this form to get in touch<span className="dot">.</span></h2>
                                    <ul class="contact-info my-5">
                                        <li><span class="icon flaticon-call"></span><a href="tel:+923118091779">+92 311 809 1779</a></li>
                                        <li><span class="icon flaticon-email-2"></span><a href="mailto:info@eliteblue.net">info@eliteblue.net</a></li>
                                        <li class="address"><span class="icon flaticon-pin-1"></span> Shahrah-e-Faisal Rd. P.E.C.S.H <br /> Block 6, Karachi, Pakistan.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="form-box">
                                <div className="default-form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="sec py-5">
                <div className="container my-md-5 text-start">
                    <span className="big-circle"></span>
                    <img src="img/shape.png" className="square" alt="" />
                    <div className="form row mx-auto">
                        <div className="contact-info col-12 my-auto">
                            <h2 className='heading'>Fill out this form to get in touch<span className="dot">.</span></h2>
                            <p className="para">
                                We are eager to be a partner in your digital journey as a digital marketing specialist
                            </p>

                            <div className="info">
                                {/*<div className="information mb-4">*/}
                                {/*    <p className='mb-0'><span><b>USA:</b></span><br /> </p>*/}
                                {/*</div>*/}
                                <div className="information mb-4">
                                    <img src={address} className="icon" alt="" />
                                    <p className='mb-0'> Shahrah-e-Faisal Rd. P.E.C.S.H Block 6, Karachi, Pakistan.</p>
                                </div>
                                <div className="information mb-4">
                                    <img src={email} className="icon" alt="" />
                                    <p className='mb-0'>info@eliteblue.net</p>
                                </div>
                                <div className="information mb-4">
                                    <img src={phone} className="icon" alt="" />
                                    <p className='mb-0'>+92 311 809 1779</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form">
                            <span className="circle one"></span>
                            <span className="circle two"></span>

                            <ContactForm />
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}





const ContactForm = ({ action, method, formId }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [actualData, setData] = useState("Success!");

    // const { AppName, setTitle, URL } = useContext(AppContext);
    // setTitle(`${AppName}Contact`);
    const URL = "https://eliteblue.net/webcms/public/"
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        setIsLoading(true)

        data = JSON.stringify(data);


        const response = await axios({
            url: `${URL}api/contact-post`,
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

    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} autocomplete="off" >
            <div className="row">
                <div className="form-group col-12">
                    <input type="hidden" {...register('domain')} name="domain" value={window.location.host} />
                    <input type="hidden" {...register('user_id')} name="user_id" value={null} />
                    <input type="hidden" {...register('page_name')} name="page_name" value={document.title.split("- ")[1]} />
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                        <input {...register('firstname', { required: true })} type="text" name="firstname" class={`light ${errors.firstname && "form-control is-invalid"}`} placeholder='First name*' />
                    </div>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                        <input type="text" name="lastname" class={`light ${errors.lastname && "form-control is-invalid"}`} placeholder='Last name*' {...register('lastname', { required: true })} />
                    </div>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                        <input type="email" name="email" class={`light ${errors.email && "form-control is-invalid"}`} placeholder='Email*' {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />

                        {errors.email && <span className='para-sm'>Please Enter a Valid Email</span>}

                    </div>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                        <input type="tel" name="phone" class={`light ${errors.phone && "form-control is-invalid"}`} placeholder='Phone*' {...register('phone', { required: true })} />
                    </div>
                </div>
                <div className="form-group col-lg-6 col-md-6 col-sm-12">
                    <div className="field-inner">
                        <input type="text" name="company_name" class={`light ${errors.company_name && "form-control is-invalid"}`} placeholder='Company name*' {...register('company_name', { required: true })} />
                    </div>
                </div>
                <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <div className="field-inner">
                        <select name="inquiry_about" class={`light ${errors.inquiry_about && "form-control is-invalid"}`}  {...register('inquiry_about', { required: true })}>
                            <option hidden value=''>Select About</option>
                            <option value="Inquiring About">Inquiring About</option>
                            <option value="Software Development">Software Development</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Branding">Branding</option>
                        </select>
                    </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="field-inner">
                        <textarea name="project_summary" class={`light ${errors.project_summary && "form-control is-invalid"}`} placeholder='Project Summary*' {...register('project_summary', { required: true })}></textarea>  </div>
                </div>
                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <button type="submit" class="theme-btn btn-style-two border-0" >
                        <i className="btn-curve"></i>
                        <span className="btn-title">
                            {isLoading ?
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                :
                                "Submit"
                            }

                        </span>
                    </button>
                </div>
            </div>
        </form >
    )
}
