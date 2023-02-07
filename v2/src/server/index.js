const express = require("express");
const { join } = require("path");
const { readFile } = require("fs");
const app = express();

app.all((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-methods", "POST,GET");
});

app.get("/img/:filename", (req, res) => {
  res.sendFile(join(__dirname, "./images/" + req.params.filename));
});

app.get("/getImg", (req, res) => {
  readFile(join(__dirname, "./data/img.json"), "utf-8", (err, data) => {
    res.send(data);
  });
});
app.listen(3001, () => {
  console.log("3001端口启动");
});
