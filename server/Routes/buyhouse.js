import express from 'express';
import { buyhousecntrl } from '../controllers/buyhousecntrl.js';
const route = express.Router()

route.get('/pin',buyhousecntrl)

export {route as buyhouseroute}