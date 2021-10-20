import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="doctor_img d-flex justify-content-center align-items-center">
                    {/* <img className="service_img" src={servicesback} alt="" /> */}
                    <div>
                        
                        <div className="contact_div">
                            <h1 className="contact_head">Contact Us</h1>
                            <hr />
                            <p className="text-dark fw-bolder ">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ornare nunc a mauris euismod, in sollicitudin turpis placerat</p>
                        </div>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <h1 className="text-start mb-5">Contact Form</h1>
                    <input type="text" name="name" placeholder="Enter your name" className="form-control" />
                    <br />
                    <input type="email" name="email" placeholder="Enter your email" className="form-control" />
                    <br />
                    <input type="password" name="password" placeholder="Enter your password" className="form-control" />
                    <br />
                    <textarea name="message" id="" cols="30" rows="10" className="form-control">massege:</textarea>
                    <br />
                    <button className="btn btn-outline-primary form-control text-uppercase fw-bold">Send</button>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <h1 className="text-start mb-5">Address</h1>
                        <div className="text-start contact_add">
                            <div>
                            <h2 className="contact_head2">      	
                               ADDRESS
                            </h2>
                            <p>Joynal Market, Uttara, Dhaka-1230</p>
                        </div>
                        <br />
                        <div>
                            <h2 className="contact_head2">
                                Phone
                            </h2>
                            <p>01939876654</p>
                        </div>
                        <br />
                        <div>
                            <h2 className="contact_head2">Email</h2>
                            <p>mijan@gmail.com</p>
                        </div>
                        <div>
                            <h2 className="contact_head2">Facebook</h2>
                            <p>www.facebook.com</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;