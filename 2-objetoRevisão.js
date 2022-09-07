// fazendo um objeto com uma função construtora(new)
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)

// para deletar um atributo de um objeto
delete produto.preco
console.log(produto)



const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 45,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    },
    condutores: [{
      nome: 'Junior',
      idade: 27
    }, {
      nome: 'Maria',
      idade: 35
    }],

    calcularValorSeguro: function() {
      //...
    }
  }
}

