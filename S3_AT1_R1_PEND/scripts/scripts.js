class funcionario {
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome;
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
  }

  calcularBonus() {
    return this.salario * 0.1;
  }

  exibirDetalhes() {
    console.log("funcionario", this.nome);
    console.log("salario:", this.salario);
    console.log("a data de admissao do funcionario:", this.dataAdmissao);
    console.log("o bonus é de:", this.calcularBonus());
  }
}

class Gerente extends funcionario {
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao);
    this.departamento = departamento;
  }

  bonusGerente(salario) {
    return this.salario * 0.2;
  }

  mostrarDados() {
    console.log(
      `${this.nome}, tem o salario de ${this.salario}, com a data de admissao${
        this.dataAdmissao
      }, o bonus é de:${this.bonusGerente()}`
    );
  }
}

const empresa = new funcionario("Bruno", 1000, "04-04-2025");
console.log(empresa);
console.log(empresa.calcularBonus());
empresa.exibirDetalhes();
const gerente = new Gerente("Bruno akira", 10000, "04-04-2000");
gerente.mostrarDados();
// gerente.bonusGerente();
