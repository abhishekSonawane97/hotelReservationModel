import express from "express";
import { createDesk, getDesks } from "../Controller/desk.controller.js";

const router = express.Router();

router.post('/createDesk', createDesk);
router.get('/getDesks', getDesks);

export default router;