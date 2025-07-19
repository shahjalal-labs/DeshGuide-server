import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;
// console.log(MONGO_URI, "mongdoburi i db.js", 7);

export async function connectToDb() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "Alhamdulillah, MongoDB is connected and the server is running!",
    );
  } catch (err) {
    console.log("❌ Failed to connect to MongoDB:", err);
    throw err; // rethrow so server startup fails if DB connection fails
  }
}
