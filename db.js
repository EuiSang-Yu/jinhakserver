var sql = require("mssql");
var config = require("./config/config.json");
const env = process.env.NODE_ENV || "development";

let pool = null;
const db = () => {
  if (!pool) pool = new sql.ConnectionPool(config[env].dbConn).connect();
  return pool;
};

module.exports = db;
