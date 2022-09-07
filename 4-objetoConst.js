// Porque podemos mudar uma atribuição de um objeto que esta em uma constante?

//pessoa -> endereço1 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa.nome)

//pessoa - endereço2 -> {...}
// const pessoa = { nome: 'Ana'}
// console.log(pessoa.nome)

// quando utilizar o Objeto freeze, depois de utilizado, não poderá mudar nada do objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

// criando um objeto que não podera ser mudado desde o começo
const pessoaConstante = Object.freeze({
  nome: 'Renata'
})
console.log(pessoaConstante)