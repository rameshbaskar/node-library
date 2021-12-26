import { Sequelize } from "sequelize";
require('dotenv').config();

const {
  LIBRARY_DB_HOST,
  LIBRARY_DB_USER,
  LIBRARY_DB_PASSWORD,
  LIBRARY_DB_NAME
} = process.env;

export const sequelize = new Sequelize(LIBRARY_DB_NAME, LIBRARY_DB_USER, LIBRARY_DB_PASSWORD, {
  host: LIBRARY_DB_HOST,
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 2,
    acquire: 30000,
    idle: 10000
  }
});