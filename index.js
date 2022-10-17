(async () => {

  const database = require('./db')
  const Produto = require('./models/produto')
  const Fabricante = require('./models/fabricante')
  await database.sync({force: true});

  const novoFabricante = await Fabricante.create({
    nome: 'Apple'
  })

//Agora posso usar o model Produto, para fazer alterações na tabela de produtos
//sem precisar nada de sql.

  const novoProduto = await Produto.create({
    nome: 'MacBook',
    preco: 10000,
    descricao: 'notebook apple',
    idFabricante: novoFabricante.id
   })
   console.log(novoProduto)


//estou usando await porque operações no banco de dados são assíncronas.
//e create é uma operação.

/*const produto = await Produto.findByPk(4) // existem vários métodos para fazer operações no banco de dados
console.log(produto)*/

//await Produto.destroy()

})();