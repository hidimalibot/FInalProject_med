const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB connection is successful");
  } catch (error) {
    console.error("Error in MongoDB connection", error);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
};

module.exports = connectDB;
