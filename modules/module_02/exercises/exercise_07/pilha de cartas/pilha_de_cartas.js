let baralho = [];
let opcao = "";
do {
  opcao = prompt(
    "Cartas no Baralho: " +
      baralho.length +
      "\n" +
      "Escolha uma das opçoes abaixo:\n " +
      "1. Adiconar uma carta \n " +
      "2. Puxar uma carta \n " +
      "3. Sair "
  );
  switch (opcao) {
    case "1":
      let novaCarta = prompt("Adicioine uma carta ao Baralho:  ");
      baralho.push(novaCarta);
      break;

    case "2":
      let removerCarta = baralho.pop();
      if (typeof baralho === "String") {
        alert("Você puxou um(a) " + removerCarta);
      } else {
        alert("Não há nenhuma carta no Baralho");
      }
      break;

    case "3":
      alert("Saindo.....");
      break;
    default:
      alert("Essa opção é invalida ");
  }
} while (opcao !== "3");
