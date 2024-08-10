import express from 'express';
import { selllandcntrl } from '../controllers/selllandcntrl.js';

const route = express.Router()

route.post('/land',selllandcntrl)

export {route as selllandroute}