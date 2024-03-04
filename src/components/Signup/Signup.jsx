// import React, { useState } from 'react';
import * as Yup from 'yup';
import "./signup.css"
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [error,setError]=useState("")
    const [loading,setLoading] = useState(true);
    const navigate= useNavigate();

  function sendDataToApi(values){
    setLoading(false);
    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values).then(({data})=>{
        console.log(data);
        if(data.message==="success")
            navigate('/signin')
    }).catch((err)=>{
        setError(err.response.data.message);
        setLoading(true);
    })
    
 }
    function validationSchema()
    {
        let schema = new Yup.object({
            name:Yup.string().min(2,"name must be at least 2 charcters").max(20).required("Name is Required"),
            email:Yup.string().email().required("Enter a valid email"),
            password:Yup.string().matches(/^[A-Z][a-z0-9@]{6,}$/).required("Password must be at least 7 charcters and start with capital letter"),
            rePassword:Yup.string().oneOf([Yup,Yup.ref('password')]).required("Passwords don't matchs"),
        })
        return schema
    }
    const register=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            rePassword:""
        },
        validationSchema
        ,onSubmit:(values)=>
        {
            console.log(values)
            sendDataToApi(values)
        }
    })
    return (
        <section className='signup-form py-5'>
            <div className='container my-5 text-white'>
                <form className='m-auto my-5 px-3 px-lg-5 py-5' onSubmit={register.handleSubmit}>
                    <h1>Register Now:</h1>
                    <div className='mb-4 mt-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="name" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Name:</label>
                        </div>
                        <input type="text" name="name" id="name" className='mb-2 form-control shadow-none' onBlur={register.handleBlur} onChange={register.handleChange}/>
                       {register.errors.name && register.touched.name? <div className="alert alert-danger">{register.errors.name}</div>:""}
                    </div>
                    <div className='mb-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="email" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Email:</label>
                        </div>
                        <input type="email" name="email" id="email" className='mb-2 form-control shadow-none' onBlur={register.handleBlur} onChange={register.handleChange}/>
                        {register.errors.email && register.touched.email? <div className="alert alert-danger">{register.errors.email}</div>:""}
                    </div>
                    <div className='mb-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="password" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Password</label>
                        </div>
                        <input type="password" name="password" id="password" className='mb-2 form-control shadow-none' onBlur={register.handleBlur} onChange={register.handleChange}/>
                        {register.errors.password && register.touched.password? <div className="alert alert-danger">{register.errors.password}</div>:""}

                    </div>
                    <div className='mb-4'>
                        <div className='position-relative overflow-hidden' style={{height:"30px"}}>
                            <label htmlFor="rePassword" style={{position:"absolute",left:"7px",top:"0",transition:"1s ease all"}}>Re-Password</label>
                        </div>
                        <input type="password" name="rePassword" id="rePassword" className='mb-2 form-control shadow-none' onBlur={register.handleBlur} onChange={register.handleChange}/>
                        {register.errors.rePassword && register.touched.rePassword? <div className="alert alert-danger">{register.errors.rePassword}</div>:""}

                    </div>
                    {error?<div className="alert alert-danger">{error}</div>:""}
                    <button type='submit' className='btn rounded-0' disabled={!(register.dirty&&register.isValid)}>
                        {loading?"Sign Up":<i className='fa fa-spinner fa-spin'></i>}
                    </button>
                </form>
            </div>
        
        </section>
    );
}

export default Signup;