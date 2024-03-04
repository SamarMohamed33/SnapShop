import React from 'react';
import "./Loading.css"
function Loading() {
    return (
        <div className='container my-5 text-center d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
            <span class="loader"></span>
        </div>
    );
}

export default Loading;