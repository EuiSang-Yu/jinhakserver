const express = require("express");
const path = require("path");
let bodyParser = require("body-parser");
let api = require("./routes");
let port = process.env.PORT || 3001;
let app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use("/api", api);

// No need to connect the pool
// Just start the web server
//RUN SERVER
let server = app.listen(port, () => {
  console.log("3001 서버가동중");
  // const host = server.address().host;
  // const port = server.address().port;
  // console.log(`Listening at http://${host}:${port}`);
});
