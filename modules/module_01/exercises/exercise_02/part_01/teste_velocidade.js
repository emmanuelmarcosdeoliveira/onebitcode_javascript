const carro1 = prompt("Informe o nome do primeiro carro:");
alert(`O primeiro carro é ${carro1}`);
const velocidadeCarro1 = prompt(
  "Infomre qual é a veliocidade maxima desse carro:"
);
alert(`A velocidade maxima do(a) ${carro1} é: ${velocidadeCarro1}Km`);
const carro2 = prompt("Informe o nome do segundo carro:");
alert(`O segundo carro é ${carro2}`);
const velocidadeCarro2 = prompt("Informe a velocidade maxima desse carro:");
alert(`a velocidade maxima do ${carro2} é de ${velocidadeCarro2} Km`);

if (velocidadeCarro1 > velocidadeCarro2) {
  alert(`O ${carro1} é mais rapido que o ${carro2}`);
} else if (velocidadeCarro1 < velocidadeCarro2) {
  alert(`O ${carro2} é mais rapido que o ${carro1}`);
} else if (velocidadeCarro1 === velocidadeCarro2) {
  alert(`o ${carro1} tem a mesma Velocidade do ${carro2}`);
}
