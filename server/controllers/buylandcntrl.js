import asyncHandler from 'express-async-handler';
import pool from '../dbconn.js';

export const buylandcntrl = asyncHandler(async (req,res)=>{
    // console.log(req)
    const {location} = req.body
    const [result] = await pool.query(`SELECT * FROM land WHERE loc_id = ? GROUP BY price`,[location])
    res.send(result)
    console.log(result)
})