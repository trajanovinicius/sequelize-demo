// arquivo de inicialização do banco de dados:
const Sequelize = require('sequelize');
const DotEnv = require('dotenv/config')
const sequelize = new Sequelize('crud', 'root', process.env.SENHA, {
  dialect: 'mysql',
  host: 'localhost',
})

module.exports = sequelize