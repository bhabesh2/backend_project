// import mongoose from mongoose;

const mongoose = require("mongoose");

// when connect to a database there is two major problem that is risk of error and delay. to handle this we use try and catch(error) and async & await(delay);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URL);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
};

module.exports = connectDb;
