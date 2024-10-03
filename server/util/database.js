const mysql = require('mysql');

const config = require('../config/config.json');

// Instead of creating a single connection to the DB, our application requires multiple connections to the DB at once. For instance, when multiple users are trying to access inventory list, such a situation will require multiple connections to the DB. Hence, use createPool for creating connection pool which maintains a cache of connections.

const pool = mysql.createPool(
    {
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.stock_dashboard
    }
)

module.exports = pool.promise();