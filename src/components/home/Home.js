import React from 'react';

import dummy1 from './hero-img-3.png';

import './hero.css';

const Home = () => {

    return (

        <div className='hero'>

            <div className="hero-content">

                <div class="img-content">
                    <img src={dummy1} alt="Fashion" />
                </div>

                <div className='content'>
                    <div className="sale">
                        <h1>Sale</h1>
                        <h1>50%</h1>
                    </div>
                    <div className="winter">
                        <h1>Winter</h1>
                    </div>
                    <div className="brand">
                        <h6>on</h6>
                        <h1>Fashion</h1>
                    </div>
                    <div className="brands">
                        <h1>Brands</h1>
                    </div>
                    <div className="shop-button">
                        <button>Shop Now</button>
                    </div>
                </div>

            </div>

        </div>

    )

}

export default Home;