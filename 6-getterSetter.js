//Underscore (_)
const sequencia = {
  _valor: 1, //é pretendido ser acessado apenas internamente
  get valor() { return this._valor++ },
  // javascript não aceita sobrecarga de métodos( vários métodos com o mesmo nome), a não ser neste exemplo
  set valor(valor) {
    if(valor > this._valor) {
      this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
