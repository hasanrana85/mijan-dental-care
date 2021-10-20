import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css';

const Doctor = (props) => {
    const {id, name, description, designation, image} = props.doctor;
    return ( 
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 doctor_height">
                <img className="doctor_image" src={image} alt="" />
                <h2 className="doctor_name">{name}</h2>
                <h5 className="">{designation}</h5>
                <hr className="text-danger" />
                <p>{description}</p>
                <br />
                <Link to={`/doctorDetails/${id}`}>
                <button className="btn btn-primary text-uppercase fw-bold">View profile</button>
                </Link>
            </div>
    );
};

export default Doctor;