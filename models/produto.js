const Sequelize = require('sequelize');
const database = require('../db')
const Fabricante = require('./fabricante')

//modelo do produto, de uma tabela que existe no banco de dados ou que vai existir.
const Produto = database.define('produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  preco: Sequelize.DECIMAL,
  descricao: Sequelize.STRING
})

// vou dizer que meu produto, pertence a um fabricante
Produto.belongsTo(Fabricante, {
  constraint: true,
  foreignKey: 'idFabricante'// chave estraneira ligando o produto com o fabricante
})

//belongsTo é o mesmo que (pertence a) depois vem o modelo a qual ele pertence
//no caso ele pertece ao modelo fabricante
//como segundo parâmetro vai um objeto com as características deste relacionamento


/*
Podemos ter relacionamentos de:
1-1 => um objeto se relaciona com um único possível obejto.
1-N => um obejto se relaciona com vários outros possíveis obejetos.
N:M => vários objetos se relacionam com vários outros possíveis obejtos.

Esses são os três mais importantes tipos de relacionamentos.
*/

module.exports = Produto