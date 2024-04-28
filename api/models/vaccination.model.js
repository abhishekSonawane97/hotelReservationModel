import mongoose from 'mongoose'

const vaccinationSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    testDate: {
        type: Date,
    },
    status: {
        type: String,
    },
    isVaccinated: {
        type: Boolean,
        default: false
    }
}, { timestamps : true });

const Vaccination = mongoose.model('Vaccination', vaccinationSchema );

export default Vaccination;

