import mongoose from "mongoose";
import config from "config";

async function databaseConnection() {
  const dbUrl = config.get<string>('dbUrl');
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default databaseConnection;
