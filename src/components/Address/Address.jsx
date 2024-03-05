// import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext';
function Address() {
let {id}=useParams();
let {checkout}=useContext(cartContext)
  async function sendDataToApi(values){
    let data = await checkout(id,values)
    console.log(data)
    if(data.status==="success")
    window.location.href=data.session.url
    
 }
   
    const checkoutForm=useFormik({
        initialValues:{
            details:"",
            phone:"",
            city:""
        }
        ,onSubmit:(values)=>
        {
            sendDataToApi(values)
        }
    })
    return (
        <section className='address-form py-5'>
            <div className='container my-5 text-white'>
                <form className='m-auto my-5 px-3 px-lg-5 py-5 p-lg-5 text-white shadow-lg' onSubmit={checkoutForm.handleSubmit}>
                    <h1>Address:</h1>
                    <div className='my-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="details" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Details:</label>
                        </div>
                        <input type="details" name="details" id="details" className='mb-2 form-control shadow-none' onChange={checkoutForm.handleChange}/>
                    </div>
                    <div className='mb-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="phone" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Phone</label>
                        </div>
                        <input type="text" name="phone" id="phone" className='mb-2 form-control shadow-none' onChange={checkoutForm.handleChange}/>
                    </div>
                    <div className='mb-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="city" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>City</label>
                        </div>
                        <input type="text" name="city" id="city" className='mb-2 form-control shadow-none' onChange={checkoutForm.handleChange}/>
                    </div>
                    <button type='submit' className='btn rounded-0'>Checkout</button>
                </form>
            </div>
        
        </section>
    );
}

export default Address;