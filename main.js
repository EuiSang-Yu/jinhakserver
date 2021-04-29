const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes");
var app = express();

app.use(bodyParser.json());
// Setup Middleware
app.use("/api", api);

app.set('port', process.env.PORT || 3001);

// Server Run
app.listen(app.get('port'), () => {
  console.log("running at port " + app.get('port'));
});