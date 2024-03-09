import React from 'react';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';
function Home() {
    return (
        <>
           <section  className="hero-section h-100 mt-5 position-relative text-center" >
                <div  className="hero-section-overlay p-2">
                    <h2>Welcome to SnapShop!</h2>
                    <p>Discover Your Style, Explore Endless Possibilities</p>
                </div>
            </section> 
            <section id="categories" className="mt-3 text-center">
                <Categories/>
            </section>
            <div className="products-section my-4">
                <div className="container">
                    <Products/>
                </div>
            </div>
        </>
    );
}

export default Home;