// Definindo uma classe chamada "funcionario"
class funcionario {
  // Construtor da classe "funcionario" que inicializa nome, salario e data de admissao
  constructor(nome, salario, dataAdmissao) {
    this.nome = nome; // Atribui o valor de "nome" à propriedade "nome" do objeto
    this.salario = salario; // Atribui o valor de "salario" à propriedade "salario" do objeto
    this.dataAdmissao = dataAdmissao; // Atribui o valor de "dataAdmissao" à propriedade "dataAdmissao" do objeto
  }

  // Método para calcular o bônus do funcionário (10% do salário)
  calcularBonus() {
    return this.salario * 0.1; // Retorna 10% do salário como bônus
  }

  // Método para exibir os detalhes do funcionário no console
  exibirDetalhes() {
    console.log("funcionario", this.nome); // Exibe o nome do funcionário
    console.log("salario:", this.salario); // Exibe o salário do funcionário
    console.log("a data de admissao do funcionario:", this.dataAdmissao); // Exibe a data de admissão do funcionário
    console.log("o bonus é de:", this.calcularBonus()); // Exibe o bônus calculado
  }
}

// Definindo uma classe "Gerente" que herda de "funcionario"
class Gerente extends funcionario {
  // Construtor da classe "Gerente" que também inicializa nome, salario, dataAdmissao e adiciona o departamento
  constructor(nome, salario, dataAdmissao, departamento) {
    super(nome, salario, dataAdmissao); // Chama o construtor da classe pai (funcionario) para inicializar as propriedades herdadas
    this.departamento = departamento; // Atribui o valor de "departamento" à propriedade "departamento" do objeto
  }

  // Método para calcular o bônus do gerente (20% do salário)
  bonusGerente(salario) {
    return this.salario * 0.2; // Retorna 20% do salário como bônus para o gerente
  }

  // Método para mostrar os dados completos do gerente
  mostrarDados() {
    // Exibe as informações do gerente de forma formatada no console
    console.log(
      `${this.nome}, tem o salario de ${this.salario}, com a data de admissao ${
        this.dataAdmissao
      }, o bonus é de: ${this.bonusGerente()}`
    );
  }
}

// Criando um novo objeto "funcionario" com nome, salário e data de admissão
const empresa = new funcionario("Bruno", 1000, "04-04-2025");
console.log(empresa); // Exibe o objeto "empresa" no console
console.log(empresa.calcularBonus()); // Exibe o bônus calculado do funcionário
empresa.exibirDetalhes(); // Exibe todos os detalhes do funcionário

// Criando um novo objeto "Gerente" com nome, salário, data de admissão e departamento
const gerente = new Gerente("Bruno akira", 10000, "04-04-2000", "TI");
gerente.mostrarDados(); // Exibe os dados do gerente

// A linha abaixo está comentada e não será executada. Ela tentaria chamar o método "bonusGerente" de forma isolada,
// mas esse método pertence à classe "Gerente" e precisa ser chamado no contexto de um objeto da classe "Gerente".
// gerente.bonusGerente();  // ERRO: método "bonusGerente" não pode ser chamado dessa forma
