import express from 'express';
import { getUsers } from '../Controller/user.controller.js';


const router = express.Router();

router.get('/getUsers', getUsers);

export default router;