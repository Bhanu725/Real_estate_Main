import asyncHandler from 'express-async-handler';
import pool from '../dbconn.js';

export const buyapartcntrl = asyncHandler(async (req,res)=>{
    const {location} = req.body
    const [result] = await pool.query(`SELECT * FROM apartment WHERE loc_id = ? GROUP BY price`,[location])
    console.log(result)
})