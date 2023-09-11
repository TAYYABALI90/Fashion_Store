import React from 'react';

import './newsletter.css';

const Newsletter = () => {

    return (

        <div className="newsletter">

            <div className="subscribe-newsletter">

                <div className="left-content">
                    <h2>Subscribe To Our Newsletter!</h2>
                </div>

                <div className="middle-content">
                    <input type="text" placeholder='Enter your email' />
                    <button type='submit'><i className="bi bi-send" /></button>
                </div>

                <div className="right-content">
                    <i className="bi bi-facebook" />
                    <i className="bi bi-twitter" />
                    <i className="bi bi-youtube" />
                    <i className="bi bi-instagram" />
                </div>

            </div>

        </div>

    )

}

export default Newsletter;