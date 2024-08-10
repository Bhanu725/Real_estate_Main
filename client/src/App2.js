import React, { useState } from 'react'
import Signup from  './Signup'
import Login from  './Login'
import Home from  './Home'
import App from './App'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import { Axios } from 'axios'
import Search from './components/Search'
import Display from './components/Display'
import Hform from './Hform'
const Appp = () => {
 

  return (
    <div>
     <BrowserRouter>
     <Routes>
       <Route path='/'  element={<Login/>}></Route>
       <Route path='/Signup' element={<Signup/>}></Route>
       <Route path='/home' element={<App/>}></Route>
       <Route path='/buy' element={<Search/>}></Route>
       <Route path='/sell' element={<Hform/>}></Route>
   
       {/* <Route path='/' element={<Home/>}></Route> */}
     </Routes>
     </BrowserRouter>
       
    </div>
  )
}

export default Appp


 







