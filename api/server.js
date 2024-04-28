import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import roomRoute from './routes/rooms.route.js'
import roomBookRoute from './routes/roomBook.route.js'
import deskRoute from './routes/desks.route.js'
import deskBookRoute from './routes/deskBook.route.js'
import vaccinationRoute from './routes/vaccinations.route.js'

dotenv.config(); 


mongoose.connect(process.env.MONGO).then(()=> console.log('Mongo DB is connected')).catch(err => console.log(err))

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}.`));

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/room', roomRoute);
app.use('/api/room', roomBookRoute);
app.use('/api/desk', deskRoute);
app.use('/api/desk', deskBookRoute);
app.use('/api/vaccination', vaccinationRoute);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        succeess : false,
        statusCode,
        message
    })
});