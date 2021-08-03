import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'


export default function Footer() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const [submitted, setSubmitted] = useState(false)
  
    const handleSubmit = (e) => {
        e.preventDefault()

        let data = {
            name,
            email,
            message,
            phone,
        }

        fetch('/api/contact-handle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setSubmitted(true)
              setName('')
              setPhone('')
              setEmail('')
              setMessage('')
            }
          })
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
                    <form className="contact-form">
                        <formGroup className="inputGroup">
                            <input type="text" name="name" className="contact-form-input name" 
                            onChange={(e)=>{setName(e.target.value)}} placeholder="Your name"/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <input type="tel" name="phone" className="contact-form-input phone"
                            onChange={(e)=>{setPhone(e.target.value)}} placeholder="Your number"/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <input type="text" name="email" className="contact-form-input email"
                            onChange={(e)=>{setEmail(e.target.value)}} required placeholder="Email"/>
                        </formGroup>
                        <formGroup className="inputGroup">
                            <textarea rows="4" cols="50" type="text" placeholder="Tell me about your idea" name="message" className="contact-form-input message"
                            onChange={(e)=>{setMessage(e.target.value)}}/>
                        </formGroup>

                        <input type="submit" value="Send" className="submit-btn" onClick={(e)=>{handleSubmit(e)}}/>
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