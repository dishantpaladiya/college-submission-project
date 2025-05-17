import React from "react";

const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="f-columns">
                            <div className="title">
                                    contact us
                        
                            </div>
                            <div className="info-inner">
                                <p className="heading">
                                    Address
                                </p>
                                <p>
                                Kavya Residency 706, Thane, Maharashtra 400615
                                </p>
                            </div>
                            <div className="info-inner">
                                <p className="heading">
                                    Email Us
                                </p>
                                <p>
                                    nfo@Drone.Com<br />
                                    Support@Drone.Com
                                </p>
                            </div>
                            <div className="info-inner">
                                <p className="heading">
                                    Call Us
                                </p>
                                <p>
                                    +(10) 123 456 7896<br />
                                    {/* +(10) 123 456 7899 */}
                                </p>
                            </div>
                        </div>
                        <div className="f-columns">
                            <div className="title">
                                
                                Latest News
                                
                            </div>
                            <ul className="footer-items">
                                <li>
                                    <a href="#">become a affilate</a>
                                </li>
                                <li>
                                    <a href="#">about drone</a>
                                </li>
                                <li>
                                    <a href="#">community meetups</a>
                                </li>
                                <li>
                                    <a href="#">why buy us?</a>
                                </li>
                                <li>
                                    <a href="#">evanto market licenses</a>
                                </li>
                                <li>
                                    <a href="#">evanto market terms</a>
                                </li>
                                <li>
                                    <a href="#">our great team</a>
                                </li>
                            </ul>
                        </div>
                        <div className="f-columns">
                            <div className="title">
                               
                                Our services
                              
                            </div>
                            <ul className="footer-items">
                                <li>
                                    <a href="#">about us</a>
                                </li>
                                <li>
                                    <a href="#">brands</a>
                                </li>
                                <li>
                                    <a href="#">gift vouchers</a>
                                </li>
                                <li>
                                    <a href="#">testimonials</a>
                                </li>
                                <li>
                                    <a href="#">site map</a>
                                </li>
                                <li>
                                    <a href="#">our team</a>
                                </li>
                                <li>
                                    <a href="#">drone support</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="f-columns">
                            <div className="title">
                              
                                   get in touchs
                              
                            </div>
                            <div className="input-field">
                                <input type="name" placeholder="name" className="input" required/>
                                <input type="email" placeholder="email" className="input" required/>
                                <textarea name="message" id="" placeholder="message" rows={4} className="input" required></textarea>
                                <button type="submit">send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;