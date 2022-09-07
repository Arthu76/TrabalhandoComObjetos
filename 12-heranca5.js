String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}
console.log('Escola'.reverse())




Array.prototype.first = function() {
  return this[0]
}
console.log([1, 2, 3, 4].first())



String.prototype.toString = function() {
  return 'Substituiu'
}
console.log('Pessoa'.reverse())
