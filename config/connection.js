const mysql = require('mysql2');

 require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'employees'
},
console.log ("welcome!")
);


module.exports = connection;
