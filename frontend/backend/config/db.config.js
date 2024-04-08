const { createPool } = require("mysql2");

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectionLimit: 10,
  connectTimeout: 30000,
});

const result = pool.query("SELECT * FROM todoitems");
console.log(result);

module.exports = pool;
