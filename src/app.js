const express = require("express");
const app = express();
const testRouter = require("./routes/test.route");

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.ip);
    next();
})

app.use("/test", testRouter);

module.exports = app;