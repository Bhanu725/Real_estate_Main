import React ,{useState} from 'react'
import {BrowserRouter,Routes,Route,Link, useNavigate} from 'react-router-dom'
import Loginvalidation from './Loginvalidation'
import axios from 'axios'

const Login = () => {
    const[values,setValues]=useState({
        email:"",
        password:""
    })
  axios.defaults.withCredentials=true;
    const [error,setErrors]=useState({})
    const Handleinput=(e)=>{
         setValues(p=>({...p,[e.target.name]:[e.target.value]}))
       
    }
    
    const navigate=useNavigate();
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setErrors(Loginvalidation(values))
        if( error.email===""&&error.password===""){
          console.log(e);
          axios.post("http://localhost:8000/Login",values)
          .then(res=>{
            console.log(`success`);
            if(res.data.Status==="Success")navigate('/home')
            else alert("the given credentials not exist")
          })
          .catch(err=>console.log(err))
        }
    }
  return (
      <div className='d-flex  justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded-25'>
        <h2>Login</h2>
           <form action="" onSubmit={HandleSubmit}>
             <div className='mt-3'>
            <label htmlFor='email'>Email id</label> 
            <input className='form-control rounded-0' onChange={Handleinput} name='email'
             type='email' placeholder='enter the email id'/>
             {error.email&&<span className='text-danger'>{error.email}</span>}
            </div>
            <div className='mt-3'>
            <label htmlFor='password'>Password</label> 
            <input  className='form-control rounded-0 ' onChange={Handleinput} name='password'
             type='password' placeholder='enter the password '/>
              {error.password&&<span className='text-danger'>{error.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100'>Login</button>
        
            <Link to={'./Signup'}><button className='btn w-100 bg-light' >Create account</button></Link>
           </form>
      </div>
    </div>
  )
}

export default Login


 







