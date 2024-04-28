import Desk from "../models/desk.model.js";
import { errorHandler } from "../utils/error.js";

export const createDesk = async(req, res, next) =>{

    try {
        const { deskName, description, perDayPrice } = req.body;

        if( !deskName || !description || !perDayPrice ){
            return next(errorHandler(400, 'All fields are required.'))
        }
        const newDesk = new Desk({ deskName, description, perDayPrice });
        await newDesk.save();
        res.status(201).json(newDesk);
    } catch (err) {
        next(err);
    }
};

export const getDesks = async(req, res, next) =>{

    try {
        const desks = await Desk.find();
        res.status(200).json(desks);
    } catch (err) {
        next(err);
    }
};
