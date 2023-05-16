const express = require("express");
const mongoose = require('mongoose')
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));
// get driver connection
const dbo = require("./db/connection");

dbo();

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(port, () => console.log(`Server running on port ${port}`))
});

mongoose.connection.on('error', err => {
    console.log(err)
});