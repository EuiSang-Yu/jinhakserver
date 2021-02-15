let sql = require("mssql");
let config = require("./config/config.json");
let env = process.env.NODE_ENV || "development";

let pool = null;
let db = () => {
  if (!pool) pool = new sql.ConnectionPool(config[env].dbConn).connect();
  return pool;
};

module.exports = db;
