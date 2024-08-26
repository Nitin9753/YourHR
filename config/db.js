const mysql = require('mysql2');
const dotenv=require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 26295
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});
// const query=`CREATE TABLE schools (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     address VARCHAR(255) NOT NULL,
//     latitude FLOAT NOT NULL,
//     longitude FLOAT NOT NULL);`;
// connection.execute(query, (err)=>{
//     console.log("DONE");
// })
module.exports = connection;
