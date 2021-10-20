import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../../Home/Service/Service';
// import servicesback from '../../../images/services/servicesback.jpg';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div className="container mt-5">
            <div className="service_img d-flex justify-content-center align-items-center">
                {/* <img className="service_img" src={servicesback} alt="" /> */}
                <div className="services_div">
                    <h1 className="services_head">Our Services</h1>
                    <hr />
                    <p className="text-dark fw-bolder ">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ornare nunc a mauris euismod, in sollicitudin turpis placerat</p>
                </div>
            </div>
            <div className="row mt-5">
                    {
                    services.map(service => <Service
                    key = {service.id}
                    service = {service}
                    ></Service>)    
                    }
            </div>
        </div>
    );
};

export default Services;