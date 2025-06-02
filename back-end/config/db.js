import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_URL } = process.env;

export const connectDb = async () =>{
    try{
        await mongoose.connect(MONGO_URL)
        console.log("Deu certo ao conectar com banco!")
    }catch(error){
        console.log("Deu ruim ao conectar com banco!", error)
    }
}



