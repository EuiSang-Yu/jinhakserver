const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./routes/index");
const bodyParser = require("body-parser");

app.use(cors());
app.use("/api", api);

app.listen(3001, () => console.log("3001 번 포트 성공"));
