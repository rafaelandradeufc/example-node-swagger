
import express = require("express");
import bodyParser = require("body-parser");
import cors = require("cors");
import routes from "./routes/index.routes";

// create and setup express app
const app = express();

app.use(bodyParser.json());

app.use(cors());

// Add all routes from routes folder
app.use("/api", routes);


module.exports = app;