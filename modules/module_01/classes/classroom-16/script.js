const idade = window.prompt("Por favor informe a sua idade:");

if (idade > 18) {
  alert("Vocé é Maior de idade"); // A mensagem do console.log só será exibida quando a expressão lógica for verdadeira
} else if (idade > 12) {
  alert("Você é Menor de idade "); // Só será exibido essa menasagem quando a expreção lógic a for falsa
} else if (idade > 4) {
  alert("Você é uma criança");
}

// Temos que ter o cuidade de escrever o nosso código da forma maias organizada possível

//Operadores Ternários

const resultado = 6 !== 6 ? "Verdadeiro" : "Falso";
console.log(resultado);
