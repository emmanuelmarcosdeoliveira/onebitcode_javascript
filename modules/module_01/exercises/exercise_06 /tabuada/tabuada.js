// Calculando a Tabuada do 2

// O programa deve começar a pedir o numero a ser usado

const numero = 
  prompt("Olá programador(a)\n"  +  "Eu sou o Robô da Tabuada: \n " 
 +  " Informe um numero: ")

let resultado = " ";
for(let fator = 1; fator <= 10; fator++  ) {
  resultado +=" -> " + numero  + " x " + fator +  " = " + (numero * fator) + "\n"
}; 
alert("Resultado da tabuada de " + numero +  ":\n\n" + resultado)
