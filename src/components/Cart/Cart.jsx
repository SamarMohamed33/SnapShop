import React, { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { userContext } from '../../context/UserContext';

function Cart() {
    let {getCartItems,setNumOfCartItems,deleteItemFromCart,updateItemQuantity}=useContext(cartContext)
    const {setUser}=useContext(userContext)
    let [cartItems,setCartItems]=useState(null)
    let [loading,setLoading]=useState(true)
    async function deleteItem(productId)
    {
        let response= await deleteItemFromCart(productId);
        console.log(response)
        if(response.status==="success"){
            toast.error("Product deleted successfully")
            setNumOfCartItems(response.numOfCartItems)
            setCartItems(response)
        }
    }
    async function updataQuantity(productId,count)
    {
        let response= await updateItemQuantity(productId,count);
        console.log(response)
        if(response.status==="success"){
            toast.error("Product updated successfully")
            setCartItems(response)
            setNumOfCartItems(response.numOfCartItems)
        }
    }
    useEffect(()=>{
        (async()=>{
            let  data=await getCartItems();
            setCartItems(data);
            setUser(data.data.cartOwner)
            localStorage.setItem("user",data.data.cartOwner)
            console.log(data)
            console.log(data.data.cartOwner)
            setNumOfCartItems(data.numOfCartItems)
            setLoading(false)
        })()
    },[])
    if(loading)return <Loading />
    return (
        <>
            <section className='cart py-5'>
                <div className="container-md py-5">
                    <h1 className='text-center my-5'>Shopping Cart</h1>
                    <div style={{border:"1px #b2b2b2 solid"}} className='py-4 border-bottom-0'>
                        <div className="row border-black text-center m-0">
                            <div className="col-2">IMAGE</div>
                            <div className='col-2'>Product</div>
                            <div className='col-2'>PRICE</div>
                            <div className='col-2'>QUANTITY</div>
                            <div className='col-2'>TOTAL</div>
                            <div className='col-2'><i class="fa-solid fa-x"></i></div>
                        </div>
                    </div>
                    <div style={{border:"1px #b2b2b2 solid"}} className='py-3'>
                        {cartItems?.data.products.map((item)=>{
                            return(
                                <div className="row text-center align-items-center cart-item m-0" key={item._id}>
                                    <div className='col-2'><img src={item.product.imageCover} className="w-100"alt="" /></div>
                                    <div className='col-2'>{item.product.title}</div>
                                    <div className='col-2'>{item.price} EGP</div>
                                    <div className='col-2'>
                                        <div className='row py-2' style={{border:"1px solid #b2b2b2"}}>
                                            <div className='col-4 p-0' style={{borderRight:"1px solid #b2b2b2",cursor:"pointer"}} onClick={()=>updataQuantity(item.product.id,item.count-1)}><i class="fa-solid fa-minus"></i></div>
                                            <div className='col-4 p-0'>{item.count}</div>
                                            <div className='col-4 p-0' style={{borderLeft:"1px solid #b2b2b2",cursor:"pointer"}} onClick={()=>updataQuantity(item.product.id,item.count+1)}><i class="fa-solid fa-plus"></i></div>
                                        </div>
                                    </div>
                                    <div className='col-2'>{item.count*item.price} EGP</div>
                                    <div className="col-2"><i class="fa-solid fa-x" onClick={()=>{deleteItem(item.product._id)}}></i></div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='row py-3'>
                        <div className='col-lg-4 update-box'>
                            <div className='d-flex justify-content-between'>
                                <Link to="/products" className='btn btn-dark rounded-0'>CONTINUE SHOPPING</Link>
                                <button className='btn btn-dark rounded-0'>UPDATE CART</button>
                            </div>
                            <p className='mt-5'>DISCOUNT CODES</p>
                            <div className='d-flex justify-content-between'>
                                <input type="text" placeholder='Enter your code here...'  className='form-control rounded-0 shadow-none'/>
                                <button className='btn rounded-0'>APPLY</button>
                            </div>
                        </div>
                        <div className='col-lg-4 offset-lg-4 checkout-box'>
                            <div className='d-flex justify-content-between p-3' style={{backgroundColor:"#f3f3f3"}}>
                                <div>Subtotal</div>
                                <div>{cartItems?.data.totalCartPrice} EGP</div>
                            </div>
                            <div className='d-flex justify-content-between p-3' style={{backgroundColor:"#f3f3f3"}}>
                                <div>Shipping</div>
                                <div>60 EGP</div>
                            </div>
                            <div className='d-flex justify-content-between p-3' style={{backgroundColor:"#f3f3f3"}}>
                                <div>Total</div>
                                <div>{cartItems?.data.totalCartPrice+60} EGP</div>
                            </div>
                            <Link to={`/address/${cartItems.data._id}`} className='btn btn-dark rounded-0 w-100'>PROCEED TO CHECHOUT</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;