
import express = require("express");
import bodyParser = require("body-parser");
import cors = require("cors");
import routes from "./routes/index.routes";

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// create and setup express app
const app = express();

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());

app.use(cors());

// Add all routes from routes folder
app.use("/api", routes);


module.exports = app;