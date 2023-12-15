// Conversor de medidas
// 1 O programa deverá pedir por um valor em metros
const valor = parseFloat(prompt("Insira um valor em metros"));
const valorInserido = alert(" O valor em metros é " + valor);
const conversao = prompt(
  "Escolha uma das opçoes para fazermos a conversão: \n\n a) milímetros \n b) centímetros \nc) decímetros \nd)decâmetro \ne) hectômetro \nf) quilômetro"
);
//2. Escolha quais das opçoes ele sera convertido

// a  - milimetros
// b - centimetros
// c - decimetros
// d  - decametro
// e - hectometro
// f  - quilometro
// 3- O programa devera converter a medida de acordo com a opção escolhida  e eibir o resultado.
switch (conversao) {
  case "a":
    const milimetros = parseFloat(valor * 1000);
    alert(`O resultado da conversão é ${milimetros} milimetros(mm)`);
    break;
  case "b":
    const centimetros = parseFloat(valor * 100);
    alert(`O resultado da conversão é ${centimetros} - centimetros(mm)`);
    break;
  case "c":
    const decimetros = parseFloat(valor * 10);
    alert(`O resultado da conversão é ${decimetros} - decimetros(dm)`);
    break;
  case "d":
    const decametro = parseFloat(valor * 0.1);
    alert(`O resultado da conversão é ${decametro}  - decametros(dam)`);
    break;
  case "e":
    const hectometro = parseFloat(valor / 100);
    alert(`O resultado da conversão é ${hectometro}  - hectometro(hm)`);
    break;
  case "f":
    const quilometro = parseFloat(valor / 1000);
    alert(`O resultado da conversão é ${quilometro}  - quilometros(Km)`);
    break;

  default:
    alert("Opção invalida!");
}
1;
//4 Caso a opçào escolhida nào exista ele devera exibir uma mensagem de opção invalida
