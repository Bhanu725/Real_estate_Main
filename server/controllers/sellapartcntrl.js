import asyncHandler from 'express-async-handler';
import pool from '../dbconn.js';

export const sellapartcntrl=asyncHandler (async (req,res)=>{    
    const {seller_name,phone,email,pincode,street,price,flt_no,area_sqft} =req.body;
   const [result] = await pool.query(`SELECT * FROM seller WHERE phone = ?`,[phone])
   if(result.length===0){
    res.send('new seller inserted')
    const id = await pool.query(`INSERT INTO seller(seller_name, phone, email) VALUES (?,?,?)`,[seller_name,phone,email])
    const seller_id = id[0].insertId
   const insert= await pool.query(`INSERT INTO apartment(seller_id, loc_id, street, price, flt_no, area_sqft) VALUES (?,?,?,?,?,?)`,[seller_id,pincode,street,price,flt_no,area_sqft])
}
   else{
    res.send('old seller inserted')
    const seller_id = result[0].seller_id
    const insert= await pool.query(`INSERT INTO apartment(seller_id, loc_id, street, price, flt_no, area_sqft) VALUES (?,?,?,?,?,?)`,[seller_id,pincode,street,price,flt_no,area_sqft])
    // res.send('inserted')
}
})