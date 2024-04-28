import User from "../models/user.model.js";
import { errorHandler } from '../utils/error.js'

export const signup = async(req, res, next) =>{
    try{
        // console.log(req.body);
        const { username, email, password } = req.body;
        if(!username|| !password || !email){
         return next(errorHandler(400, 'All Fields are required'))   
        }
        const newUser = new User({
            username,
            email,
            password,
        });

        await newUser.save();

        res.status(200).json('signup successfull')
    }
    catch(err){
        next(err);
    }
}