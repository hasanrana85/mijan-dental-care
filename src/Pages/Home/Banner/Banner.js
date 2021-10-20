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
                    <h2 className="text-dark fw-bold fs-1">The Development of Teeth</h2>
                    <p className="text-dark fw-bold fs-4">Humans have two sets of teeth: primary (or baby) teeth and permanent (adult) teeth,</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-1"
                    src={slider2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold fs-1">Types of Teeth and What They Do</h2>
                    <p className="text-dark fw-bold fs-4">A tooth is divided into two basic parts: the crown, which is the visible, white part of the tooth,</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 slide-1"
                    src={slider5}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2 className="text-dark fw-bold fs-1">The Parts of the Tooth</h2>
                    <p className="text-dark fw-bold fs-4">Teeth help you chew your food, making it easier to digest. Each type of tooth has a slightly</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;