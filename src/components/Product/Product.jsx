import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./product.css"
import { cartContext } from '../../context/CartContext';
import { toast } from "react-toastify";
import { wishlistContext } from '../../context/wishlistContext';

function Product({item,isInWishlist,setQuickView,setProductForQuickView}) {
    console.log(isInWishlist)
    let product=item
    let {setNumOfCartItems,addToCart}=useContext(cartContext)
    let {setNumOfWishlistItems, addToWishList}=useContext(wishlistContext)
    let [btnLoading,setBtnLoading]=useState(false)

   
    async function addProductToCart(productId)
    {
        setBtnLoading(true);
        let response =await addToCart(productId);
        console.log(response)
        if(response.status==="success")
        {
            setNumOfCartItems(response.numOfCartItems)
            toast("Product added successfully")
            setBtnLoading(false)
        }
    }
    async function addProductToWishlist(productId)
    {
        let response = await addToWishList(productId)
        console.log(response)
        if(response.status==="success")
        {
            setNumOfWishlistItems(response.data.length)
            toast("Product added successfully")
        }
    }
    return (
        <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="product p-3 text-center">
                <div className="product-top">
                    <Link to={`/product-details/${product._id}`}>
                        <img className="w-100" src={product.imageCover} alt="" />
                    </Link>
                    <button className="quick-btn btn text-white rounded-0" onClick={()=>{
                        setQuickView(true)
                        setProductForQuickView(product)
                    }}>Quick View</button>
                    <div className='product-btns d-flex'>
                        <button disabled={btnLoading?true:false} onClick={()=>addProductToCart(product._id)} className='btn w-100 me-2'>{btnLoading?"Loading...":"Add to Cart"}</button>
                        <button onClick={()=>addProductToWishlist(product._id)} className='btn'><i class="fa-solid fa-heart ms-1" style={{color:isInWishlist?"#e7ab3c":""}}></i></button>
                    </div>
                </div>
                <div>
                    <Link to={`/brand/${product.brand._id}`} className="d-block my-3 small brand-name">{product.brand.name}</Link>
                    <Link to={`/product-details/${product._id}`} className="product-name">{product.title.split(" ").slice(0,2).join(" ")}</Link>
                    <div className="my-3">
                        <span>{product.price} EGP</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;