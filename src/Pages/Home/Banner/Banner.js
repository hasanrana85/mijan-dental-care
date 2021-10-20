import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import slider1 from '../../../images/banner/slider-1.png';
import slider2 from '../../../images/banner/slider-2.jpg';
import slider5 from '../../../images/banner/slider-5.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-1"
                    src={slider1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold">First slide label</h2>
                    <p className="text-dark fw-bold">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-1"
                    src={slider2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold">Second slide label</h2>
                    <p className="text-dark fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-1"
                    src={slider5}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold">Third slide label</h2>
                    <p className="text-dark fw-bold">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;