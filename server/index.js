require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const incrementRouter = require("./routes/increment-routes");

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", incrementRouter);

const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
        app.listen(PORT, (error) => error ? console.log(error) : console.log(`Listening port ${PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    };
};

startServer();