const express = require("express");
const healthcheckController = require("../controllers/healthcheck.controller");
const healthcheckRouter = express.Router();

healthcheckRouter.get("/", healthcheckController.handleHealthcheck);

module.exports = healthcheckRouter;