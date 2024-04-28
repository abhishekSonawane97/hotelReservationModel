import Desk from "../models/desk.model.js";
import deskBookModel from "../models/deskBook.model.js";
import { errorHandler } from "../utils/error.js";

export const deskBook = async(req, res, next) =>{

    try {
        const { name, selectDate, deskId } = req.body;
        // Check if the selected date is not in the past
        const currentDate = new Date();
        if (selectDate < currentDate) {
          return next(errorHandler(400, 'You cannot select a date in the past.'))
        }
    
        // Check if the desk exists
        const desk = await Desk.findById(deskId);
        if (!desk) {
          return next(errorHandler(400, 'Invalid desk selection.'));
        }
    
        // Check if the desk is already booked on the selected date
        if (!desk.isAvailable) {
            return res.status(400).json({ error: 'This desk is already booked on the selected date.' });
        }
  
        if (desk.isAvailable){
            const updateDesk = await Desk.findByIdAndUpdate(desk._id, {
            isAvailable: false,
            deskName: desk.deskName,
            description: desk.description,
            perDayPrice:desk.perDayPrice
            }, { new: true })

            if(updateDesk){

                const newBooking = new deskBookModel({
                  name,
                  selectDate,
                  selectDesk: deskId
                });
                await newBooking.save();
                res.status(201).json(newBooking);
            }
        }
    
      } catch (err) {
        next(err);
      }
};