import React from 'react';

import './contact.css';

const Contact = () => {

    return (

        <div className='contact'>

            <div className='contact-content-header d-grid'>
                <h1>CONTACT US</h1>
                <small>Get in touch with us</small>
            </div>

            <div className='contact-content-details'>

                <div className='contact-content-left-details col-6'>

                    {/* <h5>DIRECTION</h5> */}

                    <p><span>Nunc eu consequat metus.</span> Nunc ultrices maximus ipsum malesuada porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas fringilla nulla eu libero euismod condimentum. Sed eu rutrum ante. Sed ut lacus nec leo rhoncus scelerisque non eget nunc.</p>
                    <p className='small-text'>Nunc eu consequat metus. Nunc ultrices maximus ipsum malesuada porta. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas fringilla nulla eu libero euismod condimentum. Sed eu rutrum ante. Sed ut lacus nec leo rhoncus scelerisque non eget nunc.</p>

                    <div className='reach-out row'>

                        <h5 className=''>ONLINE STORE CONTACT</h5>

                        <div className='reach-out-details col-4 d-grid'>
                            <span className='phone-span'>Phone: <span className='number-span'>(941) 364-7748</span></span>
                            <span className='fax-span'>Fax: <span className='number-span'>(941) 364-2322</span></span>
                            <span className='email-span'>office@yourdomain.com</span>
                            <span className='email-span'>www.yourdomain.com</span>
                        </div>
                        <div className='reach-out-details col-4 d-grid'>
                            <span className='phone-span'>Phone: <span className='number-span'>(941) 364-7748</span></span>
                            <span className='fax-span'>Fax: <span className='number-span'>(941) 364-2322</span></span>
                            <span className='email-span'>office@yourdomain.com</span>
                            <span className='email-span'>www.yourdomain.com</span>
                        </div>

                    </div>

                </div>

                <form className='contact-content-right-details col-6'>

                    {/* <h5>CONTACT FORM</h5> */}

                    <div className='input-1 d-grid'>
                        <label>Your Name*</label>
                        <input type="text" placeholder='Enter your name' />
                    </div>

                    <div className='input-2 d-grid'>
                        <label>Your Email*</label>
                        <input type="email" placeholder='Enter your email' />
                    </div>

                    <div className='input-3 d-grid'>
                        <label>Your Subject*</label>
                        <input type="text" placeholder='Enter your subject' />
                    </div>

                    <div className='message-group d-grid'>
                        <label>Your Message*</label>
                        <textarea cols="10" rows="4" placeholder='Write your message'></textarea>
                    </div>

                    <div className='form-btn'>
                        <button type='submit'>Submit</button>
                    </div>

                </form>

            </div>

        </div>

    )

}

export default Contact;