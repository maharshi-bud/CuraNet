import mongoose from "mongoose";

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set");
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    cachedConnection = conn;
    console.log(`MongoDB Connected`);
    return conn;
  } catch (error) {
    console.error("DB Connection Error:", error.message);
    throw error;
  }
};

export default connectDB;
