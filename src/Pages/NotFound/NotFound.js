import React from 'react';
import './NotFound.css';
import notFound from '../../images/notfound/2469984-ai.png';

const NotFound = () => {
    return (
        <div className="pb-5">
            <h1 className="notfound">Look like you'r lost in space</h1>
            <img className="w-100 h-50" src={notFound} alt="" />
            <button className="btn btn-primary text-uppercase fw-bold">Back to Homepage</button>

        </div>
    );
};

export default NotFound;