import express from 'express';
import { sellapartcntrl } from '../controllers/sellapartcntrl.js';

const route = express.Router();

route.post('/create', sellapartcntrl);

export { route as sellapartroute };