import mongoose from 'mongoose'

const roomBookSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
      },
      selectDate: {
        type: Date,
        // required: true
      },
      selectRoom: {
        type: String,
        // required: true
      },
      
}, { timestamps : true });

const roomBookModel = mongoose.model('roomBook', roomBookSchema );

export default roomBookModel;
