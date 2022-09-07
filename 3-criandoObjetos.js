// forma literal
const obj1 = {
  objeto: 1
}

console.log(obj1)

// object em JS
console.log(typeof Object, typeof new Object)

// função construtora do JS
const obj2 = new Object
obj2.objeto = 2
console.log(obj2)

// criando sua propria função construtora
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 3.99, 0.15)
console.log(p1.nome, p1.getPrecoComDesconto())


// Função factory
function funcionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() { //pega o salário com base nas faltas do mês
      return(salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = funcionario("Rogério", 5.000, 10)
console.log(f1.getSalario())