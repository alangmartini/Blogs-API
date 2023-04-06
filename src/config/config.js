require('dotenv').config();

const config = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || 'database_development',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || 'database_test',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || null,
    database: process.env.MYSQL_DATABASE || 'database_production',
    host: process.env.MYSQL_HOST || '127.0.0.1',
    dialect: process.env.DB_DIALECT || 'mysql',
  },
};

module.exports = config;
