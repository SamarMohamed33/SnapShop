import React, { useContext, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { wishlistContext } from '../../context/wishlistContext';


function Navbar() {
    let {numOfCartItems,setNumOfCartItems,getCartItems}=useContext(cartContext);
    let {numOfWishlistItems,setNumOfWishlistItems,getWishlist}=useContext(wishlistContext);
    const navigate= useNavigate();
    function logout()
    {
        localStorage.removeItem("token")
        navigate("/signin");
    }
    useEffect(()=>{
        (async()=>{
            let  cart=await getCartItems();
            setNumOfCartItems(cart.numOfCartItems);
            let  wishlist=await getWishlist();
            setNumOfWishlistItems(wishlist.count);
        })()
    },[])
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top shadow" style={{backgroundColor:"#252525"}}>
                <div className="container">
                    <Link className="navbar-brand" to="/home"><h1>SnapShop</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink to="/home" className="nav-link text-uppercase fw-medium" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/categories" className="nav-link text-uppercase fw-medium">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/products" className="nav-link text-uppercase fw-medium">Products</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink to="/brands" className="nav-link text-uppercase fw-medium">Brands</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ul-icons">
                            <li className="nav-item ms-0 mx-lg-2">
                                <Link to="/cart" className="nav-link position-relative" >
                                    <i class="fa-solid fa-bag-shopping ms-1 fs-6"></i>
                                    {numOfCartItems?<div className='nav-icons'><span>{numOfCartItems}</span></div>:""}
                                </Link>
                            </li>
                            <li className="nav-item  mx-2">
                                <Link to="/wishlist" className="nav-link position-relative">
                                    <i class="fa-regular fa-heart ms-1 fs-6"></i>
                                    {numOfWishlistItems?<div className='nav-icons'><span>{numOfWishlistItems}</span></div>:""}
                                </Link>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <div>
                                    <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-regular fa-user fs-5"></i>
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" onClick={()=>{logout()}}>Logout</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;