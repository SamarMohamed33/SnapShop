// import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const [error,setError]=useState("");
  const navigate=useNavigate();
  function sendDataToApi(values){
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).then(({data})=>{
        console.log(data);
        if(data.message==='success'){
            localStorage.setItem('token',data.token);
            navigate('/home')
        }
    }).catch((err)=>{
        setError(err.response.data.message)
    })
    
 }
    function validationSchema()
    {
        let schema = new Yup.object({
            email:Yup.string().email().required("Enter a valid email"),
            password:Yup.string().matches(/^[A-Z][a-z0-9@]{6,}$/).required("Password must be at least 7 charcters and start with capital letter")
        })
        return schema
    }
    const login=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema
        ,onSubmit:(values)=>
        {
            console.log(values)
            sendDataToApi(values)
        }
    })
    return (
        <section className='signin-form py-5'>
            <div className='container my-5'>
                <form className='m-auto my-5 px-3 px-lg-5 py-5 p-lg-5 text-white shadow-lg' onSubmit={login.handleSubmit}>
                    <h1 >Login Now:</h1>
                    <div className='mb-4 mt-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="email" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Email:</label>
                        </div>
                        <input type="email" name="email" id="email" className='mb-2 form-control shadow-none' onBlur={login.handleBlur} onChange={login.handleChange}/>
                        {login.errors.email && login.touched.email? <div className="alert alert-danger">{login.errors.email}</div>:""}
                    </div>
                    <div className='mb-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="password" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Password</label>
                        </div>
                        <input type="password" name="password" id="password" className='mb-2 form-control shadow-none' onBlur={login.handleBlur} onChange={login.handleChange}/>
                        {login.errors.password && login.touched.password? <div className="alert alert-danger">{login.errors.password}</div>:""}

                    </div>
                    {error?<div className="alert alert-danger">{error}</div>:""}
                    <button type='submit' className='btn rounded-0' disabled={!(login.dirty&&login.isValid)}>Sign Up</button>
                </form>
            </div>
        
        </section>
    );
}

export default Signin;