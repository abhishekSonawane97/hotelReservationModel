import Vaccination from "../models/vaccination.model.js";
import { errorHandler } from "../utils/error.js";

export const createVaccination = async(req, res, next) =>{

    try {
        const { name, testDate, isVaccinated, status } = req.body;

        if( !name || !testDate || !status ){
            return next(errorHandler(400, 'All fields are required.'))
        }
        const newEntry = new Vaccination({ name, testDate, isVaccinated, status});
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (err) {
        next(err);
    }
};

export const getVaccinationDetail = async(req, res, next) =>{

    try {
        const vaccinationReports = await Vaccination.find();
        res.status(200).json(vaccinationReports);
    } catch (err) {
        next(err);
    }
};
