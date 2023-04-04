const express = require("express");
const apiRoute = require("./apiRoute");
const rootRoute = express.Router();

rootRoute.use("/api", apiRoute);

module.exports = rootRoute;
