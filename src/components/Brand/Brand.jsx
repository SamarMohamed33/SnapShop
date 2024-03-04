import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Brand() {
    let {brands,setBrands}=useState([])
    async function getAllBrands()
    {
        let {data}= await axios("https://ecommerce.routemisr.com/api/v1/brands")
        setBrands(data.data)
        console.log(brands)
    }
    useEffect(()=>{
        getAllBrands();
        console.log("brands")
    },[])
    return (
        <div>
            Helpp
        </div>
    );
}

export default Brand;