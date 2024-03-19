const express = require("express");
const app = express();
const mongoose = require ("mongoose")
const {Connect, isConnected} = require("./db")
require('dotenv').config()

const port = 3000

Connect()

app.get("/", (req, res) => {
  const htmlResponse = `<h1><i>OOTD</i></h1><p>Database Connection Status: ${isConnected ? 'Connected' : 'Disconnected'}</p>`;
  res.send(htmlResponse);
});

app.listen(port, async () => {
  console.log(`🚀 server running on PORT: ${port}`);
});

mongoose.connection.once('open', () => {
  console.log("Connected to mongoDB");
});