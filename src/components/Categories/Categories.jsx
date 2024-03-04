import axios from 'axios';
import React, { useEffect, useState } from 'react';
import"./Categories.css"
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
function Categories() {
    let [categories,setCategories]=useState([])
    let [loading,setLoading]=useState(false);
    async function getAllCategories()
    {
        setLoading(true)
        const {data} = await axios('https://ecommerce.routemisr.com/api/v1/categories');
        setCategories(data.data)
        console.log(categories)
        setLoading(false)
    }
    useEffect(()=>{
        getAllCategories()
    },[])
    if(loading) return <Loading/>
    return (
        <>
            <section className='categories pt-5'>
                <div className="container py-5">
                    <h2 className='text-center my-5 main-header'>Categories</h2>
                    <div className="row g-4">
                        {categories.map((category)=>{
                            return <div className='category col-sm-6 col-md-4 col-lg-3 text-center' key={category._id}>
                                <div>
                                    <div className='category-img-wrapper' style={{height:"300px",width:"100%"}}>
                                        <img src={category.image} alt="" className='w-100 h-100 ratio-4x3 object-fit-cover'/>
                                        <div className='category-overlay'>
                                            <div className='shop-now'>
                                                <Link to="/products">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className='py-3 m-0'>{category.name}</h3>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Categories;