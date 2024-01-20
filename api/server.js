import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express()
dotenv.config();

const handleError = (error) => {
    console.error("Error occurred:", error);
};

mongoose.set('strictQuery', true)

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Database...")
    } catch (error) {
        handleError(error);
    }
};

app.listen(8800, ()=>{
    connect()
    console.log("Backend is running")
})