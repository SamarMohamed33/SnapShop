import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Product from "../Product/Product"
import { useQuery } from 'react-query';
import { wishlistContext } from '../../context/wishlistContext';
function Products() {
    let {getWishlist,numOfWishlistItems}=useContext(wishlistContext)
    let [wishlistItems,setWishlistItems]=useState([])
    function getAllProducts()
    {
        return axios.get("https://ecommerce.routemisr.com/api/v1/products")
    }
    let {data,isLoading}=useQuery("getProducts",getAllProducts)
    function chechWishlist(product_Id)
    {
        let isIn=false;
        for(let i=0;i<wishlistItems?.length;i++)
        {
            if(wishlistItems[i].id===product_Id)
            isIn=true
        }
        return isIn;
    }
    useEffect(()=>{
        (async()=>{
            let data=await getWishlist();
            if(data.status==="success")
            {   
                setWishlistItems(data.data);
            }
        })()
    },[numOfWishlistItems])
    if(isLoading) return<Loading/>
    return (
        <section className='products pt-5'>
            <div className="container py-5">
                <h2 className='text-center main-header my-5' >SHOP NOW</h2>
                <div className="row g-3 my-5">
                    {data?.data.data.map((product,index)=>{
                        let isInWishlist=chechWishlist(product._id)
                        return <Product item={product} isInWishlist={isInWishlist} key={index}/>
                    })}
                </div>
            </div>
        </section>
    );
}

export default Products;