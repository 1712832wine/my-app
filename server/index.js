var express = require("express");
var apiMocker = require("connect-api-mocker");
var cors = require("cors");

var app = express();
app.use(cors());

app.use("/api", apiMocker("mocks/api"));

console.log("Start server api at: http://127.0.0.1:8080");
app.listen(8080);
