const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGO_URI;

const initializeDatabase = async () => {
    await mongoose
    .connect(mongoUri)
    .then(() => {
        console.log("Connected to Database!");
    })
    .catch((error) => console.log("Failed to connect Database", error));
};

module.exports = { initializeDatabase }