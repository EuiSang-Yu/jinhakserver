const express = require("express");
const path = require("path");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

app.use("/api", api);
app.use(cors());

app.use(bodyParser.json());

app.get("/api/hello", (req, res) => {
  res.send({ message: "hello express" });
});

app.listen(3001, () => console.log("3001 번 포트 성공"));
