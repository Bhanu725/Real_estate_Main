import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Hform from "./Hform";
// import Image from "./Image";
import {BrowserRouter,Routes, Route} from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

function App() {
  
  // const [Backenddata,SetBackenddata] = useState([{}])

  // const Getdata= async ()=>{
  //   const response= await axios.get("http://localhost:8080/form")
  //   SetBackenddata(response.data)
  // }

  // useEffect(Getdata(),[])
  // const [data,setdata] =useState("");
  // const getdata=async()=>{
  //   const response = await Axios.get("http://localhost:8000/api/buy/land/pin")
  // }
  
  return (
    <div className="h-full">
      {/* <Image/> */}

      <Navbar/>
      <Search/>
      {/* {(typeof Backenddata.users == 'undefined')?(<p>loading ....</p>):(Backenddata.users.map((user,i)=><p key={i}>user</p>))} */}
      <Footer/>
    </div>
  );
}

export default App;
