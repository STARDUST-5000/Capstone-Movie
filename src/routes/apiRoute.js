const express = require("express");
const apiRoute = express.Router();

const { getAPI, postAPI } = require("../controllers/apiController");

module.exports = apiRoute;
