const express = require("express");
const testController = require("../controllers/test.controller");
const testRouter = express.Router();

testRouter.get("/", testController.handleTest);

module.exports = testRouter;