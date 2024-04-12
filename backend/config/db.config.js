const mysql = require("mysql2");

const pool = mysql.createPool({
  // host: process.env.MYSQL_HOST,
  host: "mysql",
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10,
  connectTimeout: 30000,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  // Query to get MySQL version
  connection.query("SELECT VERSION()", (err, results) => {
    if (err) throw err;
    console.log("MySQL Version:", results[0]["VERSION()"]);
    connection.release(); // Release the connection back to the pool
  });
});

module.exports = pool;
