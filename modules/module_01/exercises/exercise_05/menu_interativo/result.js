let opcao = " ";

do {
  opcao = prompt(`Seja Bem Vindo(a) \n
Escolha uma das opções abaixo: \n
1. Opção Um \n
2. Opçào Dois \n
3. Opçào Três \n
4. Opção Quatro \n
5. Encerar 
`);
  switch (opcao) {
    case "1":
      alert("Você escolheu a opçào 1");
      break;
    case "2":
      alert("Você escolheu a opçào 2");
      break;
    case "3":
      alert("Você escolheu a opçào 3");
      break;
    case "4":
      alert("Você escolheu a opçào 4");
      break;
    case "5":
      alert("Você escolheu encerrar");
      alert("Encerrando...");
      break;
    default:
      alert("Opçào invalida");
  }
} while (opcao !== "5");
