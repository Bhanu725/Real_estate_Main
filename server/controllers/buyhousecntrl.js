import asyncHandler from 'express-async-handler';
import pool from '../dbconn.js';

export const buyhousecntrl = asyncHandler(async (req,res)=>{
    const {location} = req.body
    const [result] = await pool.query(`SELECT * FROM house WHERE loc_id = ? GROUP BY price`,[location])
    res.send(result)
    console.log(result)
})