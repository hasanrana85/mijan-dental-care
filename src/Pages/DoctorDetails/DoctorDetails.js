import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './DoctorDetails.css';

const DoctorDetails = () => {
    const {doctorAll} = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect( () => {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, []);

    const findDoctor = doctors.find(doctor => doctor.id == doctorAll)
    console.log(findDoctor);
    console.log(doctors);
    
    return (
        <div>
            <h1></h1>
        </div>
    );
};

export default DoctorDetails;