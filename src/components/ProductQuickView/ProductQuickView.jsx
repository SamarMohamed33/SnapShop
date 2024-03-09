import React, { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
import { wishlistContext } from '../../context/wishlistContext';

function ProductQuickView({quickView,setQuickView,productForQuickView}) {
    let{addToCart,setNumOfCartItems}=useContext(cartContext);
    let {addToWishList,setNumOfWishlistItems}= useContext(wishlistContext)



    async function addItemToCart(productId)
    {
        let response = await addToCart(productId)
        if (response.status ==="success")
        {
            setNumOfCartItems(response.numOfCartItems)
            console.log(response)
        }
    }
    async function addItemToWishlist(productId)
    {
        let response = await addToWishList(productId)
        if (response.status ==="success")
        {
            setNumOfWishlistItems(response.data.length)
            console.log(response)
        }
    }
    return (
        <section className='product-quickview' style={{display:quickView&&productForQuickView!==null?"flex":"none"}}>
            <div className="container bg-white py-3">
                <i class="fa-solid fa-x btn btn-outline-dark" style={{ position: "absolute", top: "15px", right: "15px" }}  onClick={()=>{
                        setQuickView(false)
                        console.log(quickView)
                    }}></i>
                <div className="row">
                    <div className="col-md-6">
                        <img src={productForQuickView?.imageCover} alt="" className='w-100' />
                    </div>
                    <div className="col-md-6 pe-3">
                        <h2 className='fw-bold fs-4 mb-3 pe-5'>{productForQuickView?.title}</h2>
                        <p className='text-muted'>{productForQuickView?.description.split(" ").slice(0,30).join(" ")+"..."}</p>
                        <p className='fs-3 mb-3 price'>{productForQuickView?.price} EGP</p>
                        <div className="d-flex align-items-center gap-1 mb-3">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star  text-muted"></i>
                            <span className='ms-3 small'>(15 Reviews)</span>
                        </div>
                        <div className="my-3">
                            <ul className='m-0'>
                                <li >Brand: <span className='text-muted text-decoration-underline' >{productForQuickView?.brand.name}</span></li>
                                <li>Category : <span className='text-muted text-decoration-underline'>{productForQuickView?.category.name}</span></li>

                            </ul>
                        </div>
                        <button onClick={()=>{addItemToCart(productForQuickView._id)}} className="btn d-block w-100 py-2 rounded-0">Add to Cart</button>
                        <button onClick={()=>{addItemToWishlist(productForQuickView._id)}} className="btn d-block w-100 py-2 rounded-0 mt-2">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductQuickView;