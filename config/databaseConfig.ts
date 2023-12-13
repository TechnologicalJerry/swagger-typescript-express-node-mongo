import mongoose from "mongoose";
import config from "config";

async function connectToDb() {
  const dbUri = config.get<string>("dbUri");
}
