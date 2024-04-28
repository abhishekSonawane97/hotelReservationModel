import mongoose from 'mongoose'

const deskBookSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
      },
      selectDate: {
        type: Date,
        // required: true
      },
      selectDesk: {
        type: String,
        // required: true
      },
      
}, { timestamps : true });

const deskBookModel = mongoose.model('deskBook', deskBookSchema );

export default deskBookModel;
