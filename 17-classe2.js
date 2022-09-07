class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome) // 'super' chama a função construtora da super class, que seria o 'Avo'
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('Silva')
  }
}

const filho = new Filho
console.log(filho)