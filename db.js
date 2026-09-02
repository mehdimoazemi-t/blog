const mysql = require("mysql2/promise");
const configs = require("./config");

const pool = mysql.createPool({
    uri: configs.db.dbUri,
    waitForConnections: true,
    connectionLimit: configs.db.dbConnectionSize
})


module.exports = pool