const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodejs1', 'root', 'Password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
