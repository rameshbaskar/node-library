require('dotenv').config();

module.exports = {
  development: {
    username: process.env.LIBRARY_DB_USER,
    password: process.env.LIBRARY_DB_PASSWORD,
    database: process.env.LIBRARY_DB_NAME,
    host: process.env.LIBRARY_DB_HOST,
    dialect: 'mysql'
  }
};