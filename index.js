(async () => {
  const database = require('./db')
  const Produto = require('./produto')
  await database.sync();

//Agora posso usar o model Produto, para fazer alterações na tabela de produtos
//sem precisar nada de sql.

   const novoProduto = await Produto.create({
    nome: 'Teclado USB',
    preco: 250,
    descricao: 'Teclado gamer'
   })
   console.log(novoProduto)
//estou usando await porque operações no banco de dados são assíncronas.
//e create é uma operação.

const produto = await Produto.findByPk(4) // existem vários métodos para fazer operações no banco de dados
console.log(produto)

await produto.destroy()

})();