import React from 'react';

import blog1 from './blog-img-1.jpg';
import blog2 from './blog-img-2.jpg';
import blog3 from './blog-img-3.jpg';

import './blog.css';

const Blog = () => {

    return (

        <div className="blog">

            <h4>Latest Blog</h4>
            <div className="underline"></div>

            <div className="blog-content container">

                <div className="blog-cards">

                    <div className="card">
                        <img src={blog1} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">This Is First Post For Lorem Ipsum</h5>
                            <p className="card-text">Aliquip mollit minim laboris id enim fugiat do voluptate magna fugiat do voluptate magna</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={blog2} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">This Is Second Post For Lorem Ipsum</h5>
                            <p className="card-text">Aliquip mollit minim laboris id enim fugiat do voluptate magna fugiat do voluptate magna</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={blog3} className="card-img-top" alt="Product1" />
                        <div className="card-body">
                            <h5 className="card-title">This Is Third Post For Lorem Ipsum</h5>
                            <p className="card-text">Aliquip mollit minim laboris id enim fugiat do voluptate magna fugiat do voluptate magna</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}

export default Blog;