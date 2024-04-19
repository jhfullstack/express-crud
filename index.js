const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// middleware
app.use("/api/products", productRoute)

mongoose.connect('mongodb+srv://jhfullstack:cyp9FPO8BMIDpgfy@jhfullstack.9nokl8d.mongodb.net/JhFullstack?retryWrites=true&w=majority&appName=JhFullstack')
    .then(() => {
        console.log("Connected to Database");
        app.listen(8000, () => {
            console.log("Server is running on port 8000");
        });
    })
    .catch(() => {
        console.log("Connection Failed");
    });