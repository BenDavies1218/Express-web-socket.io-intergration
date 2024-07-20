const express = require("express");
const cors = require("cors");

// DECLARE THE EXPRESS APP
const app = express();

// ENABLE CORS FOR LOCAL ENVIROMENT
app.use(cors());

// ALLOWS JSON REQUESTS
app.use(express.json());

// ROUTES

module.exports = { app };
