import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from "react-hot-toast";
import axios from 'axios';
import '../Button/Buttons.css';



export const ContactForm = ({ action, method, formId }) => {

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


        // toast.promise(
        //     fetchData(),
        //     {
        //         loading: 'loading...',
        //         success: actualData,
        //         error: "Something went wrong!",
        //     }
        // );
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
                    <button type="submit" class="theme-btn btn-style-one border-0" >
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
