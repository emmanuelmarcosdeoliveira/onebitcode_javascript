const atacante = prompt("Qual é o nome do Persoangem atacante?");
const poderDeAtaque = parseFloat(prompt("Qual é o seu poder de ataque:"));
const defensor = prompt("Qual é o nome do personagem defensor:");
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"));
const poderDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"));
const possuiEscudo = prompt("ele possui escudo: sim /não");
let danoCausado = 0;

if (poderDeAtaque > poderDefesa && possuiEscudo === "não") {
  danoCausado = poderDeAtaque - poderDefesa;
} else if (poderDeAtaque > poderDefesa && possuiEscudo === "sim") {
  danoCausado = (poderDeAtaque - poderDefesa) / 2;
}
pontosDeVida -= danoCausado;

// alert(atacante + "causou" + danoCausado + "pontos de dano em" + defensor);
alert(`${atacante}, causou  ${danoCausado} pontos de dano em ${defensor}`);

alert(
  atacante +
    "\nPoder de ataque:" +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\n Pontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa:" +
    poderDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);

alert(
  `${atacante}\n  Poder de Ataque =  ${poderDeAtaque} \n\n ${defensor} \n Pontos de vida = ${pontosDeVida} \n Poder de Defesa = ${poderDefesa}\n Possui escudo = ${possuiEscudo}`
);
