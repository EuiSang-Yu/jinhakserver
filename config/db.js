const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "user_node",
  password: "1234",
  database: "testdb"
});

module.exports = connection;
