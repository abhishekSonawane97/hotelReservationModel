import express from "express";
import { roomBook } from "../Controller/roomBook.controller.js";

const router = express.Router();

router.post('/roomBook', roomBook);

export default router;