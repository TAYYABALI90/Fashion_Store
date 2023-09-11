import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import img1 from './shop-img-1.jpg';
import img2 from './shop-img-2.jpg';

import product1 from './product-1.jpg';
import product2 from './product-2.jpg';
import product3 from './product-3.jpg';
import product4 from './product-4.jpg';
import product5 from './product-5.jpg';
import product6 from './product-6.jpg';
import product7 from './product-7.jpg';
import product8 from './product-8.jpg';
import product9 from './product-9.jpg';
import product10 from './product-10.jpg';
import product11 from './product-11.jpg';
import product12 from './product-12.jpg';

import './shop.css';

const Shop = () => {

    const [accordionStates, setAccordionStates] = useState(Array(11).fill(false));

    const handleAccordionClick = (index) => {
        setAccordionStates((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const handleCheckboxClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>

            <div className="shop">

                <div className="shop-content-links">
                    <li><Link to='/'>Home</Link></li> /
                    <li><Link to='/shop'>Shop</Link></li>
                </div>

                <div className="shop-content">

                    <div className="left-content">

                        <div className="accordion-1">

                            <h6>Shop</h6>

                            <div className={accordionStates[0] ? 'contentBox1 active' : 'contentBox1'} onClick={() => handleAccordionClick(0)}>
                                <div className="label1">Fashion</div>
                                <div className="comment1">
                                    <p>Men</p>
                                    <p>Women</p>
                                    <p>Kids</p>
                                    <p>Accessories</p>
                                </div>
                            </div>

                            <div className={accordionStates[1] ? 'contentBox1 active' : 'contentBox1'} onClick={() => handleAccordionClick(1)}>
                                <div className="label1">Jewellery</div>
                                <div className="comment1">
                                    <p>Rings</p>
                                    <p>Bracelets</p>
                                    <p>Necklaces</p>
                                    <p>Wedding Bands</p>
                                </div>
                            </div>

                            <div className={accordionStates[2] ? 'contentBox1 active' : 'contentBox1'} onClick={() => handleAccordionClick(2)}>
                                <div className="label1">Furniture</div>
                                <div className="comment1">
                                    <p>Living Room</p>
                                    <p>Kitchen</p>
                                    <p>Office</p>
                                    <p>Home Decor</p>
                                </div>
                            </div>

                            <div className={accordionStates[3] ? 'contentBox1 active' : 'contentBox1'} onClick={() => handleAccordionClick(3)}>
                                <div className="label1">Autoparts</div>
                                <div className="comment1">
                                    <p>Engine Parts</p>
                                    <p>Exhaust Parts</p>
                                    <p>Brake Parts</p>
                                    <p>Body Parts</p>
                                </div>
                            </div>

                        </div>

                        <div className="accordion-2">

                            <h6>Filter By</h6>

                            <div className={accordionStates[4] ? 'contentBox2 active' : 'contentBox2'} onClick={() => handleAccordionClick(4)}>
                                <div className="label2">Categories</div>
                                <div className="comment2">
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Fashion(7)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Jewellery(4)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Furniture(4)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Autoparts(4)</p>
                                </div>
                            </div>

                            <div className={accordionStates[5] ? 'contentBox2 active' : 'contentBox2'} onClick={() => handleAccordionClick(5)}>
                                <div className="label2">Color</div>
                                <div className="comment2">
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} className="color" /> <p>Grey(1)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} className="color" /> <p>White(1)</p>
                                </div>
                            </div>

                            <div className={accordionStates[6] ? 'contentBox2 active' : 'contentBox2'} onClick={() => handleAccordionClick(6)}>
                                <div className="label2">Availability</div>
                                <div className="comment2">
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Not Available(1)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>In Stock(8)</p>
                                </div>
                            </div>

                            <div className={accordionStates[7] ? 'contentBox2 active' : 'contentBox2'} onClick={() => handleAccordionClick(7)}>
                                <div className="label2">Brand</div>
                                <div className="comment2">
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Brand1 (1)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Brand2 (1)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Brand3 (2)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Brand4 (2)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Brand5 (3)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Brand6 (3)</p>
                                </div>
                            </div>

                            <div className={accordionStates[8] ? 'contentBox2 active' : 'contentBox2'} onClick={() => handleAccordionClick(8)}>
                                <div className="label2">Price</div>
                                <div className="comment2">
                                    <p className="price">$87.00 - $379.00</p>
                                    <input type="range" class="form-range range" id="customRange1" onClick={(e) => handleCheckboxClick(e)} />
                                </div>
                            </div>

                            <div className={accordionStates[9] ? 'contentBox2 active' : 'contentBox2'} onClick={() => handleAccordionClick(9)}>
                                <div className="label2">Size</div>
                                <div className="comment2">
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>S (1)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>M (2)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>L (2)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>XL (3)</p>
                                </div>
                            </div>

                            <div className={accordionStates[10] ? 'contentBox2 active' : 'contentBox2'} onClick={() => handleAccordionClick(10)}>
                                <div className="label2">Gender</div>
                                <div className="comment2">
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Male (3)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Female (3)</p>
                                    <input type="checkbox" onClick={(e) => handleCheckboxClick(e)} /> <p>Unisex (3)</p>
                                </div>
                            </div>

                        </div>

                        <div className="left-content-img">
                            <img src={img1} alt="img1" />
                        </div>

                    </div>

                    <div className="right-content">

                        <div className="img-content">
                            <img src={img2} alt="img2" class="" />
                            <div className="text-content">
                                <h6>SHOP</h6>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>

                        <div className="sort-product-content">

                            <div className="icon-content">
                                <i class="bi bi-grid-fill" />
                                <i class="bi bi-list-task" />
                                <p>There are 12 products.</p>
                            </div>

                            <div className="sort-by-content">
                                <p>Sort by:</p>
                                <div className="dropdown">
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span> Relevance</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">Relevance</a></li>
                                        <li><a className="dropdown-item" href="/">Name, A to Z</a></li>
                                        <li><a className="dropdown-item" href="/">Name, Z to A</a></li>
                                        <li><a className="dropdown-item" href="/">Price, Low to High</a></li>
                                        <li><a className="dropdown-item" href="/">Price, High to Low</a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <div className="products">

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

                                <div className="card">
                                    <span className="badge bg-danger">New</span> <span className="badge bg-dark">-30%</span>
                                    <img src={product9} className="card-img-top" alt="Product1" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Analog Two Hands Slim Watch For Men
                                        </h5>
                                        <p className="card-text">$679.00</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <span className="badge bg-danger">New</span>
                                    <img src={product10} className="card-img-top" alt="Product1" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Analog Two Hands Slim Watch For Men
                                        </h5>
                                        <p className="card-text">$179.00</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <span className="badge bg-danger">New</span>
                                    <img src={product11} className="card-img-top" alt="Product1" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Analog Two Hands Slim Watch For Men
                                        </h5>
                                        <p className="card-text">$379.00</p>
                                    </div>
                                </div>

                                <div className="card">
                                    <span className="badge bg-danger">New</span> <span className="badge bg-dark">-30%</span>
                                    <img src={product12} className="card-img-top" alt="Product1" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Analog Two Hands Slim Watch For Men
                                        </h5>
                                        <p className="card-text">$479.00</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="showing-products">
                            <p>Showing 1-12 of 12 item(s)</p>
                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Shop;