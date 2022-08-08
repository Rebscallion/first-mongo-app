//setting up dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//declare port
const port = 5000;

//run the server
app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`)
    }
);