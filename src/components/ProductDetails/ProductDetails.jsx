import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
// import { storeContext } from '../../context/StoreContext';
import "./ProductDetails.css"
import { cartContext } from '../../context/CartContext';

function ProductDetails() {
    let{counter,setCounter}=useContext(cartContext);
    let  product=useParams()
    let [productDetails, setProductDetails] =useState({});
    let [loading,setLoading] = useState(true)
    let [image,setImage]= useState()
    async function getProduct()
    {
        let {data} = await  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${product.id}`);
        setProductDetails(data.data)
        setLoading(false)
    }
    useEffect(() => {
        getProduct()
    }, [])
    if(loading)return <Loading/>
    return (
        <section className='product-details py-5'>
            <div className='container py-5'>
                <div className="row py-5" >
                    <div className="col-md-5 text-center">
                        <div className="row">
                            <div className="col-md-3">
                                <div>
                                    {productDetails.images.map((image)=>{
                                        return <img key={image} src={image} alt=''className='w-75 m-1' style={{border:"1px solid rgb(200,200,200)",cursor:"pointer"}} onClick={()=>setImage(image)}/>
                                    })}
                                </div>
                            </div>
                            <div className="col-md-9">
                                <img src={image===undefined?productDetails.imageCover:image} alt="" className='w-100'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h2>{productDetails.title}</h2>
                        <p className='my-3 text-muted'>{productDetails.description}</p>
                        <div>
                            <div>
                                <h6 className='d-inline'>Brand: </h6><Link to={`/brand/${productDetails.brand._id}`}><img alt='' className='w-25' src={productDetails.brand.image}/></Link>
                            </div>
                            <ul className='m-0'>
                                <li>Category : <Link to={`/brand/${productDetails.brand._id}`} style={{color:"#8f9da6"}}>{productDetails.category.name}</Link></li>
                                <li>Rating : <span><i class="fa-solid fa-star rating-color"></i>{productDetails.ratingsAverage}</span></li>
                            </ul>
                        </div> 
                        <p className='display-6 fw-bold my-5'>{productDetails.price} EGP</p>
                        <div className='d-flex my-3 product-details-btns'>
                            <button onClick={()=>setCounter(counter++)} className='btn w-100' style={{ backgroundColor: "#252525",color:"white"}}>Add to Cart</button>
                            <button className='btn ms-2 p-0' style={{border:"1px solid rgb(200,200,200)"}}><i class="fa-solid fa-heart p-3" ></i></button>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;