import React, {  useState } from "react";
// import Display from "./Display";
// import Selector from "./selector";
// import { BiCloudLightRain } from "react-icons/bi";
// import { useHistory } from 'react-router-dom';
import axios from "axios"
import { Link, Route } from "react-router-dom";

// const find=(formData)=>{
//     const city=formData.get("city");
//     const filter=null;
//     console.log('city',city);   
// }

// const publish=(formData)=>{
//     const city=formData.get("city");
//     alert(`Searching for property in ${city}`);   
// }

const Search= () => {
    const [finalres,Setfinalres] =useState([])
    const [formData,setFormdata] = useState({
        location: ""
    });
    const [submitted,Setsubmitted] = useState(false)

    
    const Handelsubmit=async(e)=>{
        // console.log(loc)
        e.preventDefault()
        // console.log(formData);
        try{
            const response =  await axios.post('http://localhost:8000/api/buy/land/pin',{location:formData.location})
            Setfinalres(response.data) 
            // console.log(finalres);
            Setsubmitted(true)
            // console.log(`submitted`);
        }
        catch(e){
            console.log('error happened',e);
        }
    }
    const Handlechange = (e)=>{
        setFormdata( p=>({
            ...p,
            [e.target.name]:[e.target.value]
        }))
        // console.log(formData);
    };
    const Formd =()=>{
        return(
        <> <div className="p-5" >
        <h2 className="text-[#00df9a] md:text-6xl  text-center font-tit">Find your dream home</h2>
    </div>
    <div className="w-full border-2 flex items-center">
        <form  className="flex-col margin items-center p-3" >
            <label  className="text-[#00df9a] ">City :  </label>
            <input type="text" className="bg-[#F7FFF7] rounded"  name="location" value={formData.location} onChange={Handlechange}></input>
            <br />
            {/* <input type="text" className="bg-[#F7FFF7] rounded" name="location" onChange={Handlechange}></input> */}
            <input className="text-[#00df9a] rounded " type="submit"  value="search" onClick={Handelsubmit}></input>
            <br/>
            {/* <button className="text-[#00df9a]" formAction={publish} type="submit" name="button" value="submit">Search</button> */}
        </form>
    </div></>
        );
    }
    // useEffect(()=>{
    //     console.log(finalres);
    // },[finalres])
    const Display = () => {
        // console.log(props.finalres);
        // const {data} = useParams();
        // const {finalres} = props.location.state;
        // const obj = data;
        // const res=''
        // console.log(finalres);
        // finalres.forEach((Object,index)=>{
        //     res+="<p>${ob}</p>"
        // }
        // )
        // console.log(finalres+`in diaplay`);
        return ( <>
        {/* // // <p className="text-[#00df9a]">Area in acres :{obj.area_ac}</p>
        // // <p className="text-[#00df9a]">Price : {obj.price}</p>
        // // <p className="text-[#00df9a]">Street : {obj.street}</p> */}
        <div className="flex items-center justify-center ">
        {finalres.map((object, index) => (
          // Generate JSX for each object in the array
          <li key={index}>
            <p className="text-[#00df9a]">location : {object.loc_id}</p>
            <p className="text-[#00df9a]"> street : {object.street}</p>
            <p className="text-[#00df9a]"> Price : {object.price}</p>
            <p className="text-[#00df9a]"> crop Growth Rate : {object.cg_rate}</p>
          </li>
        ))}
        </div>
        </>);
    }
    
    
// area_ac
// : 
// 1
// buyer_id
// : 
// null
// cg_rate
// : 
// 10
// created
// : 
// "2023-11-13T12:46:41.000Z"
// lid
// : 
// 1
// loc_id
// : 
// 7
// price
// : 
// 100000
// seller_id
// : 
// 1
// status
// : 
// null
// street
// : 
// "123 Main St"
    

    
    return ( 
        <>
        {/* <formd/> */}
        {submitted?<Display/>:<Formd/>}
   </>
     );
}
 
export default Search;