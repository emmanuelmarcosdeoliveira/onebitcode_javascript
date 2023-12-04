// Primeiro exenplo:
switch ("b") {
  case "a":
    alert("O Resultado é  'a' ");
  case "b":
    alert("O resultado é 'b' ");
    break;
  case "c":
    alert("O resultado é 'c' ");
  default:
    alert("Finalizando...");
}
// Segundo Exemplo:
const resultado = prompt("Escolha uma alternativa: \nx) \ny) \nz) ");

switch (resultado) {
  case "x":
    alert("O Resultado é  'x' ");
    break;
  case "y":
    alert("O resultado é 'y' ");
    break;
  case "z":
    alert("O resultado é 'z' ");
    break;
  default:
    alert("Finalizando...");
}

// terceiro Exemplo:
const resultados = prompt("Escolha uma alternativa: \n1) \n2) \n3) ");
const resultadoNumerico = parseFloat(resultado);

switch (resultadoNumerico) {
  case "1":
    alert("O Resultado é  'x' ");
    break;
  case "2":
    alert("O resultado é 'y' ");
    break;
  case "3":
    alert("O resultado é 'z' ");
    break;
  default:
    alert("Finalizando...");
}
