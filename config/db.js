import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()


export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.mongoURI)
    } catch (err) {
        console.log(err.message)
        // Exit process with failure
        process.exit(1)
    }
}


