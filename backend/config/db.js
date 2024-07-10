import mongoose from "mongoose"

export const connectDB = async () =>{
    await  mongoose.connect('mongodb+srv://siddharajmali3:siddharaj2024@cluster0.bzhy6rl.mongodb.net/?').then(()=>console.log("Db connected Successfully"))
}




