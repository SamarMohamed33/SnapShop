import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';

function Brand() {
    let [brands,setBrands]=useState([])
    let [loading,setLoading]=useState(false);
    async function getAllBrands()
    {
        setLoading(true)
        let {data}= await axios("https://ecommerce.routemisr.com/api/v1/brands")
        setBrands(data.data)
        console.log(brands)
        setLoading(false)
    }
    useEffect(()=>{
        getAllBrands();
    },[])
    if(loading) return <Loading/>
    return (
        <section className='pt-5'>
            <div className="container py-5">
                <h1 className='text-center main-header my-5'>Brands</h1>
                <div className="row g-4">
                {brands.map((brand)=>{
                    return(
                        <div className='col-md-2'>
                            <div className='shadow-sm'>
                                <img src={brand.image} className='w-100' alt="" />
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </section>
    );
}

export default Brand;