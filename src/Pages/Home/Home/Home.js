import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import './Home.css';
// import React, { useEffect, useState } from 'react';
import Service from '../../Home/Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="container mt-5">
            <div className="service_img d-flex justify-content-center align-items-center">
                {/* <img className="service_img" src={servicesback} alt="" /> */}
                <div className="home_service">
                    <h1 className="home_ser_head">Our Services</h1>
                    <hr />
                    <p className="text-dark fw-bolder ">Read the latest blog on dental services, treatment. Learn about current dental topics important for Moms, kids, and the whole family.</p>
                </div>
            </div>
            <div className="row mt-5">
                    {
                    services.slice(0,6).map(service => <Service
                    key = {service.id}
                    service = {service}
                    ></Service>)    
                    }
            </div>
        </div>
        </div>
    );
};

export default Home;