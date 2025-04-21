const express = require("express");
const app = express();
const healthcheckRouter = require("./routes/healthcheck.route");
const testRouter = require("./routes/test.route");

app.use(express.json());

app.use("/healthcheck", healthcheckRouter)
app.use("/test", testRouter);

module.exports = app;