const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes");
var app = express();

// Setup Middleware
app.use("/api", api);
// error handler
app.use("/api", (req, res) => {
  res.status(404).json({
    error: "NULL"
  });
});

app.set('port', process.env.PORT || 3001);

// Server Run
app.listen(app.get('port'), () => {
  console.log("running at port " + app.get('port'));
});