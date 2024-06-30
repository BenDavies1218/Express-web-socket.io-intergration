// server.js
const express = require("express");
const http = require("http");
const cors = require("cors");

function initializeServer() {
  const app = express();
  app.use(cors());

  const server = http.createServer(app);
  return server;
}

module.exports = { initializeServer };
