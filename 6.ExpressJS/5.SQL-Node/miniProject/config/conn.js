const mysql = require("mysql2");
const conn = mysql.createConnection({
  host: "localhost",
  user: "onkar",
  password: "123",
  database: "test",
});
if (conn) {
  console.log("connected to MariaDB");
} else {
  console.log("unable to establish an connection to MariaDB server");
}
module.exports = conn;
