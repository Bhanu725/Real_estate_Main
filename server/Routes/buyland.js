import express from 'express';
import { buylandcntrl } from '../controllers/buylandcntrl.js';
const route = express.Router()

route.post('/pin',buylandcntrl)

export {route as buylandroute}