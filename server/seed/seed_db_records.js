import mongoose from "mongoose";
import data from "./records.js";
import Record from "../models/Record.js";
import "dotenv/config";

(async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    const records = data.map((item) => new Record(item));

    await Record.deleteMany();
    console.log("Data Deleted successfully");

    await Record.insertMany(records);
    console.log("Data Seeded successfully");
  } catch (error) {
    console.log(`Error While seeding data: ${error}`);
  } finally {
    mongoose.connection.close();
    console.log("Connection to the datebase was closed");
  }
})();
