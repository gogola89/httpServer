const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/*", (req, res) => {
  res.sendFile("index.html");
});

module.exports = app;
