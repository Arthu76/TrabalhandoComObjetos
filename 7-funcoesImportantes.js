const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) //ler as chaves
console.log(Object.values(pessoa)) // ler os valores
console.log(Object.entries(pessoa)) // ler as entradas( chaves e valores )

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

// Object.entries(pessoa).forEach(([chave, valor]) => {
//   console.log(`${chave}: ${valor}`)
// })


// dando erro
Object.defineProperties(pessoa,{ 
  'dataNacimento': {
  enumerable: true,
  writable: false,
  value: '01/01/2019'
}})
console.log(Object.keys(pessoa))


// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)


