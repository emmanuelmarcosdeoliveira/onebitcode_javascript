const palavra = prompt(
  "Qual plavra você quer verificar se ela é um Palindromo ?"
);
let palavrainvertida = "";
for (let i = palavra.length - 1; i >= 0; i--) {
  palavrainvertida += palavra[i];
  console.log(palavrainvertida);
}
if (palavra === palavrainvertida) {
  alert(palavra + " é um palindromo ");
} else {
  alert(
    palavra +
      " não é um palindromo ! \n\n" +
      palavra +
      " !== " +
      palavrainvertida
  );
}
