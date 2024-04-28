import mongoose from 'mongoose'

const roomSchema = new mongoose.Schema({
    roomName: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    perDayPrice: {
        type: Number,
        // required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
}, { timestamps : true });

const Room = mongoose.model('Room', roomSchema );

export default Room;
