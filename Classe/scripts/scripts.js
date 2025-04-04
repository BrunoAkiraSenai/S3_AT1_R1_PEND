//classe - molde para criar objetos

class Veiculo {
  //constructor - é uma palavra-chave especial, que se refere ao proprio objeto criado
  constructor(marca, modelo) {
    //this - é uma palavra-chave especial, que se refere ao proprio objeto criado
    this.marca = marca;
    this.modelo = modelo;
  }
}

const primeiroCarro = new Veiculo("Toyota", "Corolla");
console.log(primeiroCarro.marca);

//--------------------------------------------------------------------------------
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

const calular = new Produto("Celular", 1500);
const notebook = new Produto("Celular", 5000);

console.log(celular.nome);
console.log(notebook.nome);

//--------------------------------------------------------------

class contaBancaria {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    this.saldo += valor;
  }
  getSaldo() {
    return `Seu saldo é: R$${this.saldo.toFixed(2)}`;
  }
}

const conta = new contaBancaria(1000);
conta.depositar(1000);
console.log(conta.getSaldo());

//-----------------------------------------------------------------

class pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentacao() {
    return `Olá meu nome é ${this.nome}, tenho ${this.idade} anos!`;
  }
}

const minhaApresentacao = new pessoa("Bruno", 26);
console.log(minhaApresentacao.apresentacao());

//-----------------------------------------------------------------------

class steam {
  #saldo;

  constructor(saldoInicialSteam) {
    this.#saldo = saldoInicialSteam;
  }

  depositarValorSteam(valor) {
    if (valor > 0) {
      this.#saldo += valor;
    } else {
      console.log("O deposito é invalido");
    }
  }
  getSaldoSteam() {
    return `Seu saldo atual na steam é ${this.#saldo}`;
  }
}

const steam = new steam(1000);
conta.depositar(300);
console.log(steam.getSaldoSteam());

//-------------------------------------------------------------------------
class Usuario {
  constructor(senha) {
    this.senha = senha;
  }

  #verificarForcaSenha(senha) {
    return senha.length > 6 ? true : false;
  }
  criarConta(senha) {
    if (this.#verificarForcaSenha(senha)) {
      return console.log("Senha invalida");
    }
    return console.log("senha invalida");
  }
}

const user = new Usuario("12345");
user.criarConta();

//------------------------------------------------------------------------

class Carro extends Veiculo {
  constructor(marca, modelo, portas) {
    super(marca, modelo);
    this.portas = portas;
  }
  info() {
    console.log(
      `A marca do carro é: ${this.marca}, seu modelo é: ${this.modelo} e ele possui ${this.portas}`
    );
  }
}

const meuCarro = new Carro("Honda", "Civic", 4);
meuCarro.info();

//------------------------------------------------------------------------------

class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salorio;
  }

  mostrarDados() {
    console.log(
      `Funcionario: ${(this, nome)}, salario: R$${this.salario.toFixed(2)}`
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, tipo) {
    super(nome, salario);
    this.tipo = tipo;
  }
  mostrarSetor() {
    console.log(`${this.nome}, é gerente do setor ${this.setor}`);
  }
}

const gerente = new Gerente("Alciondo", 10000, "TI");
gerente.mostrarDados();
gerente.mostrarSetor();
