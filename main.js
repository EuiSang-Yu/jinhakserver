const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const api = require("./routes");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ message: "hello express" });
});

app.listen(port, () => console.log(`${port} 번 포트 성공`));
