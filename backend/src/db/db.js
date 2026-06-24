import mongoose from "mongoose"



const connectDb=()=>{
    mongoose.connect(process.env.MONGO_URI),
    console.log("database connected ")
}


export default connectDb;