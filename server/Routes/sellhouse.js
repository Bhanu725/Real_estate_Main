import express from 'express';
import {sellhousecntrl} from '../controllers/sellhousecntrl.js'

const route = express.Router()

route.post('/create',sellhousecntrl)

export {route as sellhouseroute}
