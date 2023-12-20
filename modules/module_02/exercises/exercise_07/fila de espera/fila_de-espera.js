// foi criado a variavel com o nome dos pacientes
let fila = [];
let opcao = " ";
do {
  let pacientes = " ";
  for (let indice = 0; indice < fila.length; indice++) {
    pacientes += indice + 1 + "°" + fila[indice] + "\n";
  }
  opcao = window.prompt(
    "Pacientes :\n" +
      pacientes +
      "\nEscolha uma ação:\n1. Novo Paciente\n2. Consultar Paciente\n3. Sair"
  );
  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Qual o nome do novo Paciente: ");
      fila.push(novoPaciente);
      break;

    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido da fila ");
      } else {
        alert("Não há pacientes na Fila");
      }
      break;

    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Essa opção não existe");
  }
} while (opcao !== "3");
