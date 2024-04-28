import express from "express";
import { createRoom, getRooms } from "../Controller/room.controller.js";

const router = express.Router();

router.post('/createRoom', createRoom);
router.get('/getRooms', getRooms);

export default router;