import React from 'react';
import "./AboutUs.css";
import about1 from '../../images/about/about-1 (1).jpg';
import about2 from '../../images/about/choose-1.jpg';
import about3 from '../../images/about/choose-2.jpg';
import about4 from '../../images/about/choose-3.jpg';

const AboutUs = () => {
    return (
        <div>
            <div className="container mt-5">

                <div className="about_img d-flex justify-content-center align-items-center">
                {/* <img className="service_img" src={servicesback} alt="" /> */}
                <div className="about_header">
                    <h1 className="about_head">About Us</h1>
                    <hr />
                    <p className="text-dark fw-bolder ">A buildup of plaque, a sticky bacteria, below the gum line causes it. Left untreated, it can at some point</p>
                </div>
            </div>

                <div className="row mb-5 mt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-left about_animat">
                        <h1 className="aboutus headhr">More About Us</h1>
                        <hr />
                        <br />
                        <h5 className="aboutus text-primary">We Provide Most Proffesional Service Since 1978</h5>
                        <br />
                        <p className="aboutus">Dental Prevention</p>
                        <hr />
                        <p className="aboutus">Fluoride Treatment</p>
                        <hr />
                        <p className="aboutus">Tooth Extraction</p>
                        <hr />
                        <p className="aboutus">Cavity Filling</p>
                        <hr />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img className="about1" src={about1} alt="" />
                    </div>
                </div>
                <div className="specialize">
                    <h2 className="text-primary text-center fw-bold py-3">We Specialize In</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae odio eos dolores enim, impedit ipsum?</p>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h1 className="choose">Why Choose Us?</h1>
                        <br />
                        <h4 className="choose">We are always carefull to our patient and service</h4>
                        <br />
                        <p className="choose">Lorem Ipsum is simply du my text of the pritin industry. Lorm Ipsum hasbeen the industry's standardsdummy text eversince the 1500s, when an unknown printer</p>
                        <p className="choose">took a galley of type and scramble it to make type specimen book. It has survived not only five centurie, but also the leap into</p>
                        <h4 className="choose">Book and appoinment with any specialist anytime</h4>
                        <br />
                        <h4 className="choose">We offer lot of service in a best price</h4>
                        <br />
                        <h4 className="choose">Online payment seystem with different method</h4>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                <img className="aboutimage-1" src={about2} alt="" />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                        <img className="aboutimage-2" src={about3} alt="" />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <img className="aboutimage-3" src={about4} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;