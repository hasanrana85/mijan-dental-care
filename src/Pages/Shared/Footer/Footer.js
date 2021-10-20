import React from 'react';
import './Footer.css';
import logo from '../../../images/logo/logo.png';

const Footer = () => {
    return (
        <div className="foot_back mt-5">
            <div className="container">
                <img className="logoFooter" src={logo} alt="" />
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start text-white">
                            <h2>Mijan Dental Care</h2>
                            <hr />
                            <p>Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of</p>
                            <br />
                            <p>73,Abdullahpur, Uttara, Dhaka-1230</p>
                            <br />
                            <p>+0198765678</p>
                            <br />
                            <p>mijandoctor@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start text-white">
                            <h2>Services</h2>
                            <hr />
                            <p>Cleanings</p>
                            <p>Crowns & bridges</p>
                            <p>Available Lab</p>
                            <p>Root canals</p>
                            <p>Cosmetic dentistry</p>
                            <p>Dental implants</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start">
                            <h2>Latest News</h2>
                            <hr />
                            <div className="text-white">
                                <p>If you need a crown or lorem an implant you will pay it</p>
                                <p>July-2, 2014</p>
                            </div>
                            <div className="text-white">
                                <p>If you need a crown or crowns and bridges you will pay it</p>
                                <p>July-2, 2014</p>
                            </div>
                            <div className="text-white">
                                <p>If you need a crown or Cosmetic dstistry you will pay it</p>
                                <p>July-2, 2014</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-white">
                            <h2>Make an Appointment</h2>
                            <hr />
                            <p className="text-justify">We'd also like to use analytics cookies. These send information about how our site is used to services called Adobe Analytics, Hotjar and Google Analytics. We use this information to improve our site.</p>
                            <br /><br />
                            <button className="rounded-pill btn-primary px-5 py-3 border-0">09877654567</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;