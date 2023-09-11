import React from 'react';

import product1 from './product-1.jpg';
import product2 from './product-2.jpg';
import product3 from './product-3.jpg';
import product4 from './product-4.jpg';
import product5 from './product-5.jpg';
import product6 from './product-6.jpg';
import product7 from './product-7.jpg';
import product8 from './product-8.jpg';

import './products.css';

const Products = () => {

    return (

        <div className='products'>

            <h4>New Products</h4>
            <div className="underline"></div>

            <div className="product-content container">

                <div className="product-cards">

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product1} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Women's Stylish Handbags</h5>
                            <p className="card-text">$399.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-18%</span>
                        <img src={product2} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Round Fedora Hat For Men Women</h5>
                            <p className="card-text">$379.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product3} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Analogue White Dial Men's Watch</h5>
                            <p className="card-text">$389.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product4} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Men's Cotton & Stretchable Jeans</h5>
                            <p className="card-text"><small>$99.00</small> $87.12</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-25%</span>
                        <img src={product5} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Unisex Stripped Woollen Muffler
                            </h5>
                            <p className="card-text">$349.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product6} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Women Cateye Sunglasses
                            </h5>
                            <p className="card-text"><small>$359.00</small> $294.38</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product7} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Men's Cotton Sports Cap
                            </h5>
                            <p className="card-text">$319.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-30%</span>
                        <img src={product8} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Analog Two Hands Slim Watch For Men
                            </h5>
                            <p className="card-text">$279.00</p>
                        </div>
                    </div>

                </div>

                <div className="product-collections">

                    <div className="collection-1">
                        <h1>WOMEN</h1>
                        <h1>COLLECTIONS</h1>
                        <h6>SHOP NOW <i className="bi bi-arrow-right" /></h6>
                    </div>

                    <div className="collection-2">
                        <h1>MEN</h1>
                        <h1>COLLECTIONS</h1>
                        <h6>SHOP NOW <i className="bi bi-arrow-right" /></h6>
                    </div>

                </div>

                <h4>Special Products</h4>
                <div className="underline"></div>

                <div className="product-cards">

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product1} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Women's Stylish Handbags</h5>
                            <p className="card-text">$399.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-18%</span>
                        <img src={product2} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Round Fedora Hat For Men Women</h5>
                            <p className="card-text">$379.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-18%</span>
                        <img src={product3} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Analogue White Dial Men's Watch</h5>
                            <p className="card-text">$389.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product4} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">Men's Cotton & Stretchable Jeans</h5>
                            <p className="card-text"><small>$99.00</small> $87.12</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-25%</span>
                        <img src={product5} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Unisex Stripped Woollen Muffler
                            </h5>
                            <p className="card-text">$349.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span>
                        <img src={product6} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Women Cateye Sunglasses
                            </h5>
                            <p className="card-text"><small>$359.00</small> $294.38</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-30%</span>
                        <img src={product7} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Men's Cotton Sports Cap
                            </h5>
                            <p className="card-text">$319.00</p>
                        </div>
                    </div>

                    <div className="card">
                        <span className="badge bg-danger">New</span> <span className="badge bg-dark">-30%</span>
                        <img src={product8} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">
                                Analog Two Hands Slim Watch For Men
                            </h5>
                            <p className="card-text">$279.00</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Products;