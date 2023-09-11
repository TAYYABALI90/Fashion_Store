import React from 'react';

import client1 from './client-1.jpg';
import client2 from './client-2.jpg';

import './testimonials.css';

const Testimonials = () => {

    return (

        <div className="testimonials">

            <div id="carouselExampleDark" className="carousel carousel-dark slide">

                <h4>What Client Say</h4>
                <div class="underline"></div>

                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval={10000}>
                        <p>Aliqua proident labore nulla officia voluptate. Nisi et aute ut cupidatat occaecat. Exercitation sint cupidatat dolore nulla nostrud. Minim sint veniam proident minim esse dolor adipisicing</p>
                        <img src={client2} className="" alt="Client2" />
                        <h5>Keonel Lee</h5>
                        <h4>Fashion Designer</h4>
                    </div>

                    <div className="carousel-item" data-bs-interval={10000}>
                        <p>Aliqua proident labore nulla officia voluptate. Nisi et aute ut cupidatat occaecat. Exercitation sint cupidatat dolore nulla nostrud. Minim sint veniam proident minim esse dolor adipisicing</p>
                        <img src={client1} className="" alt="Client1" />
                        <h5>Alina Lee</h5>
                        <h4>Customer</h4>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </div>

    )

}

export default Testimonials;