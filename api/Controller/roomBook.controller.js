import Room from "../models/room.model.js";
import roomBookModel from "../models/roomBook.model.js";
import { errorHandler } from "../utils/error.js";

export const roomBook = async(req, res, next) =>{

    try {
        const { name, selectDate, roomId } = req.body;
        // Check if the selected date is not in the past
        const currentDate = new Date();
        if (selectDate < currentDate) {
          return next(errorHandler(400, 'You cannot select a date in the past.'))
        }
    
        // Check if the room exists
        const room = await Room.findById(roomId);
        if (!room) {
          return next(errorHandler(400, 'Invalid room selection.'));
        }
    
        // Check if the room is already booked on the selected date
        if (!room.isAvailable) {
            return res.status(400).json({ error: 'This room is already booked on the selected date.' });
        }
  
        if (room.isAvailable){

            const updateRoom = await Room.findByIdAndUpdate(room._id, {
            isAvailable: false,
            roomName: room.roomName,
            description: room.description,
            perDayPrice:room.perDayPrice
            }, { new: true })

            if(updateRoom){

                const newBooking = new roomBookModel({
                  name,
                  selectDate,
                  selectRoom: roomId
                });
                await newBooking.save();
                res.status(201).json(newBooking);
            }
        }
    
      } catch (err) {
        next(err);
      }
};