import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className='notfound'>
            <div className="container d-flex justify-content-center align-items-center flex-column" style={{height:"100vh"}}>
                <h1 className='display-1 fw-bolder'>Oops!</h1>
                <h2>404 - PAGE NOT FOUND</h2>
                <p>The page you are looking for might have been removed, had its name changed or is temorarily unavailable.</p>
                <Link to="/home" className='btn btn-dark rounded-4'>GO TO HOMEPAGE</Link>
            </div>
        </section>
    );
}

export default NotFound;