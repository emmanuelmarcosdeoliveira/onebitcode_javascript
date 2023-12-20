const turista = prompt("E ai Turista, Qual é o seu nome Turista ?");
let cidades = " ";
let contagem = 0;

let continuar = prompt("Você visitou alguma cidade? (sim/não)");
while (continuar === "sim") {
  let cidade = prompt("Qual o nome da Cidade Visitada ?");
  cidades += " -" + cidade + "\n";
  contagem++;
  continuar = prompt("Você visitou alguma outra cidade ?(sim/não)");
}
alert(`Nome do Turista: ${turista}  \n
Quantidade de Cidades Visitadas: ${contagem} \n
Cidades Visitadas:  \n 
${cidades}
`);
