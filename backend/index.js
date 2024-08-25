const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;
const cors = require("cors");
const todoRoute = require("./routes/todoRoute.js");
const userRoute = require("./routes/userRoute.js");

const dbConnect = () => {
    mongoose.connect(`${DB_URL}/satyajit`)
    .then(() => {
        console.log("db connected");
    })
    .catch((err) => {
        console.log('db not connected\n', err.message);
        process.exit(1);
    });
}
dbConnect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("YOU ARE UP");
});
app.get("/ping", (req, res) => {
    res.send("PONG");
});
app.use("/api/v1/todo", todoRoute);
app.use("/api/v1/user", userRoute);
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

