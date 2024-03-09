import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Copyrights from '../../Copyrights/Copyrights';
import UpButton from '../../UpButton/UpButton';

function MainLayout() {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <div className='w-100'>
                <Footer/>
                <Copyrights/>
            </div>
            <UpButton/>
         
        </>
    );
}

export default MainLayout;