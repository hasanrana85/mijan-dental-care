import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceAll} = useParams();
    const [services, setServices] = useState([]);
    useEffect(()=>{
        // const url = `./services.jSON`;
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    const findService = services.find( service => service.id == serviceAll);
        console.log(findService);
    return (
        <div>
            <div className="container my-5">
                <h1 className="fw-bold text-info my-5">Wel Come To Our Clinic</h1>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="w-50">
                        <img className="rounded-3 w-100" src={findService?.image} alt="" />
                        <hr /><br />
                        <h2 className="fw-bold fs-1">{findService?.name}</h2>
                        <p>{findService?.description}</p>
                    </div>
                </div>
            </div>
            {/* <h2>{findService?.name}</h2>
            <h2>{findService?.description}</h2> */}
            
        </div>
    );
};

export default ServiceDetails;