const express = require("express");
const http = require("http");
const cors = require("cors");

function serverConnect() {
  // DECLARE THE EXPRESS APP
  const app = express();

  // ENABLE CORS FOR LOCAL ENVIROMENT
  app.use(cors());

  // ALLOWS JSON REQUESTS
  app.use(express.json());

  // ROUTES

  // DECLARE THE SERVER WITH HTTP SO WE CAN PASS THE REQUESTS TO SOCKETS.IO
  const server = http.createServer(app);
  return server;
}

module.exports = { serverConnect };
