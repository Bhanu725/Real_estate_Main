import React from "react";
// import { useParams } from "react-router-dom";
const Display = (props) => {
    // console.log(props.finalres);
    // const {data} = useParams();
    const {finalres} = props.location.state;
    // const obj = data;
    console.log(finalres+`in diaplay`);
    return ( <>
    {/* // // <p className="text-[#00df9a]">Area in acres :{obj.area_ac}</p>
    // // <p className="text-[#00df9a]">Price : {obj.price}</p>
    // // <p className="text-[#00df9a]">Street : {obj.street}</p> */}
    </>);
}
 
export default Display;