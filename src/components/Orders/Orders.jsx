import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import axios from 'axios';

function Orders() {
    let [orders,setOrders]=useState(null)
    let [loading,setLoading]=useState(true)
    async function getOrders()
    {
        localStorage.getItem("user")
         const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${localStorage.getItem("user")}`)
         setOrders(response.data)
    }
    useEffect(()=>{
        setLoading(true)
        getOrders()
        console.log(localStorage.getItem("user"))
        setLoading(false)

    },[])
   
    if(loading)return <Loading />
    return (
        <>
            <section className='cart py-5'>
                <div className="container-md py-5">
                    <h1 className='text-center my-5'>ORDERS</h1>
                    <div style={{border:"1px #b2b2b2 solid"}} className='py-4 border-bottom-0'>
                        <div className="row border-black text-center m-0">
                            <div className="col-2">ORDER</div>
                            <div className='col-2'>DATE</div>
                            <div className='col-2'>STATUS</div>
                            <div className='col-2'>PAYMENT</div>
                            <div className='col-2'>TOTAL PRICE</div>
                            <div className='col-2'>Actions</div>
                        </div>
                    </div>
                    <div style={{border:"1px #b2b2b2 solid"}} className='py-3'>
                        {orders?.map((item,index)=>{
                            return(
                                <div className="row text-center align-items-center cart-item m-0" key={item._id} style={{borderBottom:index===orders.length-1?"":"1px #b2b2b2 solid"}}>
                                    <div className='col-2'>{item.id}</div>
                                    <div className='col-2'>{item.createdAt}</div>
                                    <div className='col-2'>{item.isDelivered?"Completed":"Not Completed"}</div>
                                    <div className='col-2'>{item.paymentMethodType}</div>
                                    <div className='col-2'>{item.totalOrderPrice} EGP</div>
                                    <div className="col-2"><button className='btn btn-dark rounded-0'>VIEW</button></div>
                                </div>
                            )
                        })}
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default Orders;