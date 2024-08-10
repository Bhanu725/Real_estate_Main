import React ,{useState} from 'react'
import {BrowserRouter,Routes,Route,Link, useNavigate} from 'react-router-dom'
import Signupvalidation from './Signupvalidation'
import axios from 'axios'
const Signup = () => {
    const[values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })
    const [error,setErrors]=useState({})
    const Handleinput=(e)=>{
         setValues(p=>({...p,[e.target.name]:[e.target.value]}))
       
    }
    const navigate=useNavigate();
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setErrors(Signupvalidation(values));
        if(error.name===""&&error.email===""&&error.password===""){
          axios.post("http://localhost:8000/Signup",values)
          .then(res=>{navigate('/');})
          .catch(err=>console.log(err))
        }
    }
  return (
 
       <div className='d-flex  justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded-25'>
          <h2>signup</h2>
           <form action="" onSubmit={HandleSubmit}>
           <div className='mt-3'>
            <label htmlFor='name'>Name</label> 
            <input className='form-control rounded-0' onChange={Handleinput}  name='name'
            type='name' placeholder='enter the name'/>
            {error.name&&<span className='text-danger'>{error.name}</span>}
            </div>

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

            <button type='submit' className='btn btn-success w-100'>Signup</button>
     
           <button className='btn w-100 bg-light'  onClick={()=>{navigate('/')}}>Login</button> 
           </form>
      </div>
    </div>
     
  )
}

export default Signup
