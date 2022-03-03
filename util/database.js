const Sequelize = require('sequelize');

const sequelize = new Sequelize('<Schema name>', '<username>', '<password>', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
