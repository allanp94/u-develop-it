const mysql = require("mysql2");

//connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username
    user: "root",
    password: "Alexandros34mk",
    database: "election",
  },
  console.log("Connected to the election database.")
);

module.exports = db;
