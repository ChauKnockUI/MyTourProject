const { mongoose } = require("mongoose");
require("dotenv").config();

const dbUrl = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.ceekra0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dbUrl);
    console.log("Connet to MongoDB succesfully!!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
