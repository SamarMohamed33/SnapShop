import React, { useContext, useEffect, useState } from 'react';
import { wishlistContext } from '../../context/wishlistContext';
import { cartContext } from '../../context/CartContext';
import Loading from '../Loading/Loading';

function Wishlist() {
    let {getWishlist,removeFromWishlist,setNumOfWishlistItems}=useContext(wishlistContext)
    let {addToCart,setNumOfCartItems}=useContext(cartContext)
    let [wishlistItems,setWishlistItems]=useState([]);
    let [loading,setLoading]=useState(false);


    async function addProductToCart(productId){
        let data=await addToCart(productId);
        console.log(data)
        if(data.status==="success")
        {
            setNumOfCartItems(data.numOfCartItems)
        }
    }
    async function removeItemFromWishlist(productId)
    {
        let data=await removeFromWishlist(productId);
        if(data.status==="success")
        {
            setNumOfWishlistItems(data.data.length)
            let wishlistData=await getWishlist();
            if(wishlistData.status==="success")
            {
                setWishlistItems(wishlistData.data)
            }
        }
    }
    function addWishlistToCart(wishlistItems)
    {
        wishlistItems.forEach(async product=>{
            await addProductToCart(product._id) 
            console.log("added to cart")
        })
    }
    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            let data=await getWishlist();
            if(data.status==="success")
            {
                setWishlistItems(data.data)
            }
            setLoading(false)
        })()
    },[])
    if(loading)return <Loading/>
    return (
        <section className='wishlist py-5'>
            <div className="container py-5">
                <h1 className='text-center my-5'>Wishlist</h1>
                <div className="wishlist-items">
                    {wishlistItems?.map((item)=>{
                        return(
                            <div className="row py-4" style={{borderBottom:"1px solid #000"}} key={item._id}>
                                <div className="col-md-2">
                                    <img src={item.imageCover} alt='' className='w-100'/>
                                </div>
                                <div className="col-md-6 offset-md-1">
                                    <div  className='d-flex flex-column justify-content-between h-100'>
                                        <h3 className='fs-5'>{item.title}</h3>
                                        <div className="my-4 text-muted">
                                            <p className='my-1'>Brand: {item.brand.name}</p>
                                            <p className='my-1'>Category: {item.category.name}</p>
                                        </div>
                                        <button className='btn main-btn rounded-0' style={{width:"fit-content"}} onClick={()=>addProductToCart(item._id)}>Add to Cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className='d-flex flex-column justify-content-between h-100 align-items-end'>
                                        <span>{item.price} EGP</span>
                                        <button className='btn main-btn rounded-0' onClick={()=>removeItemFromWishlist(item._id)} style={{width:"fit-content"}}><i class="fa-regular fa-trash-can"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p  className='mt-5 text-center'>Do you wish to purchase the entire wishlist?</p>
                <button className='btn btn-dark mb-5 rounded-0 d-block mx-auto' onClick={()=>addWishlistToCart(wishlistItems)}>Add All to Cart</button>
            </div>
        </section>
    );
}

export default Wishlist;