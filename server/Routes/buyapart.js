import express from 'express';
import { buyapartcntrl } from '../controllers/buyapartcntrl.js';

const route = express.Router()

route.post('/pin',buyapartcntrl)

export {route as buyapartroute}