const express = require("express");
var sql = require("mssql");
const { Connection } = require("tedious");
const config = require("./../config/config.json");
const router = express.Router();

console.log(sql.connect(config), "sql.connect");

// sql
//   .connect(config)
//   .then(() => {
//     return sql.query`select * from usr`;
//   })
//   .then((result) => {
//     console.dir(result);
//   })
//   .catch((err) => {
//     console.log(err);
//     // ... error checks
//   });

// sql.on("error", (err) => {
//   // ... error handler
// });

router.get("/", (req, res) => {
  //console.log("http://localhost:3001/api/");
  //res.send(sql.result);
});

module.exports = router;
