import mongoose from 'mongoose'

const deskSchema = new mongoose.Schema({
    deskName: {
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

const Desk = mongoose.model('Desk', deskSchema );

export default Desk;
