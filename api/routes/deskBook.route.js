import express from "express";
import { deskBook } from "../Controller/deskBook.controller.js";

const router = express.Router();

router.post('/deskBook', deskBook);

export default router;