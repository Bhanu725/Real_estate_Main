import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter,Routes,Route,Link, useNavigate} from 'react-router-dom'

const Home = () => {
  const[auth,setAuth]=useState(false);
  const[message,setMessage]=useState('');
  const[ name,setName]=useState('');
  axios.defaults.withCredentials=true;
  
  useEffect(()=>{
    axios.get("http://localhost:8081")
    .then(res=>{
      console.log(res.data.Status)
      if(res.data.Status==="Success"){
        setAuth(true);
        setName(res.data.name)
       
      }
      else {
              setAuth(false)
              setMessage(res.data.error)
       }
    })
    .catch(err=>console.log(err))

  },[])
  function Handledelete(){
    axios.get("http://localhost:8081/logout")
    .then(res=>{
       window.location.reload(true);
    }).catch(err=>console.log(err));
   
  }
  return (
    <div className='container mt-4'>
      
      {
        auth?
        <div>
            <h1>You are authorised  {name}</h1>
            <button className='btn btn-danger w-10'onClick={Handledelete} >Logout</button>
        </div>
        :
        <div>
         <h1 >You are Unauthorised</h1>
       <Link to="/">    <button className='btn btn-success w-29' >Login</button></Link> 
        </div>
      }
    </div>
  )
}

export default Home
