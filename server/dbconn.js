import mysql from 'mysql2'

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'realestate'
}).promise();

export default pool;

