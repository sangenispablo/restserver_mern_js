import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("MongoDB Atlas conectado...");
  } catch (error) {
    console.log(error);
    throw new Error("Error de conexion a Mongo...");
  }
};

export default dbConnection;
