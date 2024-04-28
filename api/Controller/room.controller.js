import Room from "../models/room.model.js";
import { errorHandler } from "../utils/error.js";

export const createRoom = async(req, res, next) =>{

    try {
        const { roomName, description, perDayPrice } = req.body;

        if( !roomName || !description || !perDayPrice ){
            return next(errorHandler(400, 'All fields are required.'))
        }
        const newRoom = new Room({ roomName, description, perDayPrice });
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (err) {
        next(err);
    }
};

export const getRooms = async(req, res, next) =>{

    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};
