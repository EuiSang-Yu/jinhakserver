var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.get("/", function (req, res) {
  console.log(req.url);
  res.send({ title: "아으아" });
});

app.listen(3001, () => console.log("3001 번 포트 연결"));
