import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="foot_back mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start">
                            <h2>Mijan Dental Care</h2>
                            <hr />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, molestiae!</p>
                            <br />
                            <p>73,Abdullahpur, Uttara, Dhaka-1230</p>
                            <br />
                            <p>+0198765678</p>
                            <br />
                            <p>mijandoctor@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="text-start">
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
                            <div>
                                <p>If you need a crown or lorem an implant you will pay it</p>
                                <p>July-2, 2014</p>
                            </div>
                            <div>
                                <p>If you need a crown or lorem an implant you will pay it</p>
                                <p>July-2, 2014</p>
                            </div>
                            <div>
                                <p>If you need a crown or lorem an implant you will pay it</p>
                                <p>July-2, 2014</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div>
                            <h2>Make an Appointment</h2>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem cum iusto qui. Praesentium, nihil.</p>
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