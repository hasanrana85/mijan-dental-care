import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const {serviceAll} = useParams();
    const [service, setService] = useState({});
    useEffect(()=>{
        const url = `./services.jSON`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    },[])


    return (
        <div>
            
        </div>
    );
};

export default ServiceDetails;