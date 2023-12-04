const veiculo1 = prompt("Insira o nome do primeiro veiculo:");
const velocidade1 = parseInt(prompt("Insira a velocidade do primeiro carro:"));
const veiculo2 = prompt("Insira o nome do segundo veiculo:");
const velocidade2 = parseInt(prompt("Insira a velocidade do segundo carro:"));

if (velocidade1 > velocidade2) {
  alert(veiculo1 + "é mais rapido do que " + veiculo2);
} else if (velocidade2 > velocidade1) {
  alert(veiculo2 + "é mais rapido que" + veiculo1);
} else {
  alert(veiculo1 + "e" + veiculo2 + "possuem velocidades iguais");
}
