let saldo = prompt("Qual a quantidade de Dinheiro Disponivel R$:");
saldo = parseFloat(saldo);
let opcao = " ";

do {
  opcao = prompt(`a quantidade de dinheiro Disponivel é R$${saldo} \n
  Opção 1  - Adicionar Dinheiro
  Opção 2  - Remover Dinheiro
  Opçào 3  - Sair 
  `);
  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("Informe o Valor a ser Adicionado: "));
      break;
    case "2":
      saldo -= parseFloat(prompt("Informe o Valor a ser Subtraido: "));
      break;
    case "3":
      alert("Saindo...");
      break;
    default:
      alert("Digite uma das opções validas");
  }
} while (opcao !== "3");
