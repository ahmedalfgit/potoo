import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useRouter} from 'next/router'


export default function Footer() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const router = useRouter()

    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: "https://potoo-flax.vercel.app/api/contact",
            headers: {
                'Content-Type': 'application/json',
            },
            data: values,
        };

        try {
            const response = await axios(config);
            if(response.status == 200) {
                reset()
                router.push("/")
            }
        } catch (err) {
            console.error(err);
        }
    }
    
      return (
          <>
        <div className="container-fluid footer-container">
            <div className="row justify-content-around pl-md-5 pb-md-3 mx-md-5 pt-md-4">
                <div className="col-lg-4 col-12 text-center">
                    <h1 className="say-hello-h1">
                        Let's chat
                    </h1>
                    <div className="row justify-content-md-start justify-content-center pb-4 pt-4 py-lg-3 mt-lg-2 mt-3 phone-email-row">
                        <div className="col-lg-4 col-6 text-left">
                            <Link href="mailto:hi@potooweb.com">
                                <a className="say-hello-a pb-lg-2">
                                    hello@potoo.studio
                                    <span className="bottom-line"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-2 text-center">
                    <ul className="social-media-list pt-lg-5 mt-lg-5 mt-5">
                        <li className="item social-media-item pt-lg-4 pt-5 pb-4 pb-md-0">
                            <Link href="/#">
                                <a  className="social-media-a">
                                    <Image
                                    src="/Instagram-icon.svg"
                                    width={35}
                                    height={35}
                                    alt="Instagram Icon"
                                    />
                                </a>
                            </Link>
                        </li>
                        <li className="item social-media-item pt-lg-5 pt-4 pb-4 pb-md-0">
                            <Link href="/#">
                                <a  className="social-media-a">
                                    <Image
                                    src="/Dribbble-icon.svg"
                                    width={35}
                                    height={35}
                                    alt="Dribbbkle Icon"
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                    <form className="contact-form" onSubmit={handleSubmit(onSubmitForm)}>
                        <div className="inputGroup">
                            <input type="text" name="name" className="contact-form-input name" 
                             placeholder="Your name" {...register('name', {
                                 required: true, 
                             })}
                             />
                             {errors.name && errors.name.type === "required" && <span className="form-error-span">Opps you forgot your name</span>}
                        </div>
                        <div className="inputGroup">
                            <input type="tel" name="phone" className="contact-form-input phone"
                             placeholder="Your number" 
                             {...register("phone", {
                                 required: true,
                             })}
                             />
                             {errors.phone && errors.phone.type === "required" && <span className="form-error-span">Forgot to enter your digits</span>}
                        </div>
                        <div className="inputGroup">
                            <input type="text" name="email" className="contact-form-input email"
                              placeholder="Email" 
                             {...register("email", {
                                 required: true,
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Entered value does not match email format"
                                }
                             })}
                             />
                             {errors.email && errors.email.type === "required" && <span className="form-error-span">Your email is needed</span>}
                             {errors.email && <span className="form-error-span" role="alert">{errors.email.message}</span>}
                        </div>
                        <div className="inputGroup">
                            <textarea rows="4" cols="50" type="text" placeholder="Tell me about your idea" name="message" className="contact-form-input message"
                           {...register("message", {
                               required: true,
                           })}/>
                               {errors.message && errors.message.type === "required" && <span className="form-error-span">What is your idea?</span>}
                        </div>
                        <input type="submit" value="Send" className="submit-btn"/>
                    </form>
                </div>
            </div>
        </div>
        <div className="container-fluid pl-lg-0 co-container pt-lg-5 mt-lg-2">
            <div className="row justify-content-md-start justify-content-center">
                <div className="col-lg-4 col-12">
                    <ul className="list co-list pl-5 ml-3 pt-md-0 ml-md-0">
                        <li className="item co-made-p item">
                            <p className="co-made">
                                Made in the high altitude of 
                            </p>
                        </li>
                        <li className="item co-made-icon item pl-lg-2 pl-1">
                            <Image
                            src='/CO-Logo.png'
                            width={25}
                            height={25}
                            alt="Colorado Made"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
      );
    }