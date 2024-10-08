import React from "react";
import {BiChevronDown} from 'react-icons/bi'

const Selector = () => {
    return (
        <>
       <div className="inline-block relative w-64  p-3">
  <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
    <option value="house" className="hover:fill-[#00df9a]"> House </option>
    <option value="apartments" className="hover:fill-[#00df9a]"> Apartments </option>
    <option value="lands" className="hover:bg-[#00df9a]"> Lands </option>
  </select>
  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
</div>
        </>
      );
}
 
export default Selector;