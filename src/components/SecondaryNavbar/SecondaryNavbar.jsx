import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function SecondaryNavbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top shadow" style={{backgroundColor:"#252525"}}>
                <div className="container">
                <Link className="navbar-brand" to="/home"><h1>SnapShop</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink to="/signin" className="nav-link" aria-current="page" href="#">Sign In</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink to="/signup" className="nav-link" href="#">Sign Up</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SecondaryNavbar;