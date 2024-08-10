import asyncHandler from 'express-async-handler';
import pool from '../dbconn.js';

export const sellhousecntrl=asyncHandler (async (req,res)=>{
    console.log(req);
    const {seller_name,phone,email,pincode,street,price,bd_rm,area_sqft} =req.body;
    const check = await pool.query(`SELECT seller_id FROM seller WHERE phone = ?`,[phone])
    if(check.length==0){
    const id = await pool.query(`INSERT INTO seller(seller_name, phone, email) VALUES (?,?,?)`,[seller_name,phone,email])
    const seller_id = id[0].insertId
    const insert = await pool.query(`INSERT INTO house(seller_id, loc_id, street, price, bd_rm, area_sqft) VALUES (?,?,?,?,?,?)`,[seller_id,pincode,street,price,bd_rm,area_sqft])
    console.log(`old seller inserted`)
    }
    else{
        const seller_id = check[0].seller_id
        const insert = await pool.query(`INSERT INTO house(seller_id, loc_id, street, price, bd_rm, area_sqft) VALUES (?,?,?,?,?,?)`,[seller_id,pincode,street,price,bd_rm,area_sqft])
        console.log(`new seller inserted`)
    }
    // res.send(result)
})
