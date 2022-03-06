import mongoose from "mongoose";
import { DB_NAME, DB_URL } from "../config";

const connectDB = async () => {
    await mongoose.connect(`${DB_URL}/${DB_NAME}`);
    return { close: () => mongoose.disconnect() };
  };
  
  export default connectDB