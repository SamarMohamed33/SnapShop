import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <footer className='footer py-5'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-4 newsletter-left">
                            <h6 className='fs-4'>
                                <span className=''>Subscribe to our<br/></span>
                                Newsletter
                            </h6>
                        </div>
                        <div className="col-md-8 newsletter-right">
                            <div className='d-flex'>
                                <input type="emial" name='email' placeholder='Enetr your Email' className='form-control me-2 rounded-0 shadow-none border-0'/>
                                <button className='btn rounded-0'>Submit</button>
                            </div>
                        </div>
                        <div className='col-md-12 text-center footer-bottom mt-4 pt-4'>
                            <h6>SnapShop</h6>
                            <div>
                                <ul className='list-unstyled d-flex justify-content-center'>
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/brands">Brands</Link></li>
                                    <li><Link to="/categories">Categories</Link></li>
                                </ul>
                            </div>
                            <div className='footer-icons d-flex justify-content-center'>
                                <div className='d-flex justify-content-center align-items-center rounded-circle mx-2' style={{border:"1px solid white",width:"35px",height:"35px"}}>
                                    <i class="fa-brands fa-facebook"></i>
                                </div>
                                <div className='d-flex justify-content-center align-items-center rounded-circle mx-2' style={{border:"1px solid white",width:"35px",height:"35px"}}>
                                    <i class="fa-brands fa-twitter"></i>
                                </div>
                                <div className='d-flex justify-content-center align-items-center rounded-circle mx-2' style={{border:"1px solid white",width:"35px",height:"35px"}}>
                                    <i class="fa-brands fa-instagram"></i>
                                </div>
                                <div className='d-flex justify-content-center align-items-center rounded-circle mx-2' style={{border:"1px solid white",width:"35px",height:"35px"}}>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;