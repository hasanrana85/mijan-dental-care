import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, description, image} = service;
    return (
        <div className="col-lg-4 col-sm-6 col-12 mb-5 border p-3">
            <img className="w-100 services rounded-3" src={image} alt="" />
            <h3 className="fw-bold">{name}</h3>
            <p>{description}</p>
            <Link to={`/serviceDetails/${id}`}>
            <button className="btn btn-primary">Learn More</button>
            </Link>
        </div>
    );
};

export default Service;