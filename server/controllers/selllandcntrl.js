import asyncHandler from 'express-async-handler';
import pool from '../dbconn.js';

export const selllandcntrl = asyncHandler(async (req, res) => {
    const { seller_name, phone, email, pincode, street, price, area_ac,cg_rate } = req.body;
    const [result] = await pool.query(`SELECT * FROM seller WHERE phone = ?`, [phone])
    if (result.length === 0) {
        res.send('new seller inserted')
        const id = await pool.query(`INSERT INTO seller(seller_name, phone, email) VALUES (?,?,?)`, [seller_name, phone, email])
        const seller_id = id[0].insertId
        const insert = await pool.query(`INSERT INTO land(seller_id, loc_id, street, price, area_ac,cg_rate) VALUES (?,?,?,?,?)`, [seller_id, pincode, street, price, area_ac,cg_rate])
    }
    else {
        res.send('old seller inserted')
        const seller_id = result[0].seller_id
        const insert = await pool.query(`INSERT INTO land(seller_id, loc_id, street, price, area_sqft) VALUES (?,?,?,?,?)`, [seller_id, pincode, street, price, area_ac,cg_rate])
    }
})