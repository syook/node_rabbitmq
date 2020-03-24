const express = require("express");

// Mounting routes
const v1Routes = express.Router();

// user
const userApi = require("./user");

v1Routes.get("/users", userApi.fetchAll);

module.exports = v1Routes;
