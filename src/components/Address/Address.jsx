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
        <div>
            <div className='container my-5'>
                <form className='w-75 m-auto my-5' onSubmit={checkoutForm.handleSubmit}>
                    <h1>Address:</h1>
                    <div className='mb-4'>
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
                    <button type='submit' className='btn btn-success'>Checkout</button>
                </form>
            </div>
        
        </div>
    );
}

export default Address;