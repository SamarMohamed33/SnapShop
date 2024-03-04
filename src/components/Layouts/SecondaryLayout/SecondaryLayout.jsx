import React from 'react';
import { Outlet } from 'react-router-dom';
import SecondaryNavbar from '../../SecondaryNavbar/SecondaryNavbar';

function SecondaryLayout() {
    return (
        <div>
           <SecondaryNavbar/>
            <Outlet/>
        </div>
    );
}

export default SecondaryLayout;