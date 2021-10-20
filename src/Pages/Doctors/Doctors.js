import React, { useEffect, useState } from 'react';
import './Doctors.css';
import Doctor from '../../Pages/Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect( () => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, []);
    return (
        <div>
            <div className="container my-5">
                <div className="doctor_img d-flex justify-content-center align-items-center">
                {/* <img className="service_img" src={servicesback} alt="" /> */}
                <div>
                    
                    <div className="doctor_p">
                        <h1 className="doctor_head">Our Doctors</h1>
                        <hr />
                        <p className="text-dark fw-bolder ">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ornare nunc a mauris euismod, in sollicitudin turpis placerat</p>
                    </div>
                </div>
            </div>
                <div className="row g-3 mt-5">
                    {
                        doctors.map(doctor => <Doctor
                        key = {doctor.id}
                        doctor = {doctor}
                        ></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;