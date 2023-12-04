let velocidade = 80;

while (velocidade > 0) {
  alert(`O carro está com a velovidade ${velocidade} Km/h`);
  velocidade -= 20;
  alert("Diminuindo 20km/h");

  if (velocidade === 40) {
    break;
  }
}

alert("O carro parou!");
