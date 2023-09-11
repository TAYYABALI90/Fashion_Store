import React, { useState, useEffect } from 'react';

import './footer.css';

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleTopButton = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleTopButton);
        return () => {
            window.removeEventListener('scroll', toggleTopButton);
        };
    }, []);

    return (

        <div className='footer'>

            <div className='footer-content-details row container'>

                <div className='details-1 col-3'>
                    <h6>WELCOME TO</h6>
                    <h2>FASHION STORE</h2>
                    <p>Qui cupidatat voluptate labore sunt amet Qui cupidatat voluptate labore sunt amet.</p>
                    <small>Start customizing your ecommerce website.</small>
                    <div className='social-icons'>
                        <i className="bi bi-facebook social-icon-1" />
                        <i className="bi bi-instagram social-icon-2" />
                        <i className="bi bi-twitter social-icon-3" />
                        <i className="bi bi-linkedin social-icon-4" />
                    </div>
                </div>

                <div className='details-2 col-2'>
                    <h6>Our company</h6>
                    <li><a href="/">> Delivery</a></li>
                    <li><a href="/">> About Us</a></li>
                    <li><a href="/">> Legal Notice</a></li>
                    <li><a href="/">> Sitemap</a></li>
                </div>

                <div className='details-2 col-2'>
                    <h6>Products</h6>
                    <li><a href="/">> Secure Payment</a></li>
                    <li><a href="/">> Prices Drop</a></li>
                    <li><a href="/">> New Products</a></li>
                    <li><a href="/">> Best Sales</a></li>
                </div>

                <div className='details-3 col-2'>
                    <h6>Your account</h6>
                    <li><a href="/">> Personal Info</a></li>
                    <li><a href="/">> Orders</a></li>
                    <li><a href="/">> Credit Slips</a></li>
                    <li><a href="/">> Addresses</a></li>
                </div>

                <div className='details-4 col-3'>
                    <h6>SUBSCRIBE FOR OFFERS & UPDATES</h6>
                    <p>Enter your email and we'll send you a coupon with 10% off your next order.</p>
                    <div className='subscribe-newsletter'>
                        <input type="email" placeholder='Enter your email' />
                        <button type='button'>Submit</button>
                    </div>
                </div>

            </div>

            <div className={`top-icon ${isVisible ? 'show' : ''}`} onClick={scrollToTop}>
                <span>TOP</span>
            </div>

            <div className='copyright'>
                Copyright © 2023 Fashion Store. All Rights Reserved
            </div>

        </div>

    )

}

export default Footer;