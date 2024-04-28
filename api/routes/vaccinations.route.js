import express from "express";
import { createVaccination, getVaccinationDetail } from "../Controller/vaccination.controller.js";

const router = express.Router();

router.post('/createVaccination', createVaccination);
router.get('/getVaccinationDetail', getVaccinationDetail);

export default router;