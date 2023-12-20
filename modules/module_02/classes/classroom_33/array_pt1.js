
// Abaixo criamos um array com alguns elementos dentro dele.
const arr = ["Frodo","Sam","Merry","Pippin","Gandalf","Aragorn","Legolas","Gimli",];
console.log(arr);

//-----------------------------------------------------------------------------------

// Adicionando elementos 
//push("valor") Adiciona um elemento ao final de um array
arr.push("Boromir");
console.log(arr)

//unshift("valor")
// Essa funçào adiciona elementos ao inicio do array


//----------------------------------------------------------------------------------
// Remover Elementos 


//.pop( ) ele remove os elemnentos que estão ao final do array
arr.pop()
console.log(arr)

//shift  - essa função remove o primeiro elemento dentro de um array
arr.shift()
console.log(arr)

// vamos agora criar uma variavel para podermos remover esse elemento e saber qual elemento foi removido

let primeiroElemento  = arr.shift()
console.log(arr)
console.log(primeiroElemento)

//-----------------------------------------------------------------------------------
//Pesquisando por um elemento
//includes("valor")

const inclui = arr.includes("Gandalf")
console.log(inclui)

//------------------------------------------------------------------------------------
// Fazendo a pesquisa por um índice
//indexOf() - ela serve para sabermos o índice de um determinado elemento dentro de um array

const indice = arr.indexOf("Gandalf")
console.log(indice)
console.log(arr)


//------------------------------------------------------------------------------------
// Vamos ver outras 2 funçoes dentro de um array  (Cortar e Contcatenar)
// cortar  - divide o arry em portes

//Vamos criar uma variável para fazer isso ele será chamada de `hobbit`e com a função `slice` iremos especificar o indice inical e o indice final para ele fazer essa cópia

const hobbits = arr.slice(0, 4)
console.log(hobbits)


//Utiizando esse metódo para fazer a o slice começando do final 
const outros = arr.slice(-3)
console.log(outros)



//-----------------------------------------------------------------------------------
// concatenar - essa funçào faz a junçao de arrays
// vamos fazer o uso da funçào concat para juntar os arrays 


//concat
const sociedade  = hobbits.concat(outros, "Manu")
console.log(sociedade)

//------------------------------------------------------------------------------------
// Fazendo a substituiçào de elmentos dentro do array
// para isso vamos utlizar a função .splice("indice", "valor", "novo elemento")

const elementosRemovidos  = sociedade.splice(indice, 1, "gandalf o Cinzneto", false, true, "Manu")
console.log(sociedade)
console.log(elementosRemovidos)


//------------------------------------------------------------------------------------
//Fazendo a interação dentro de um array
for(let indice = 0; indice < sociedade.length; indice++ ) {
  const elemento = sociedade[indice]
  console.log(elemento + "se encontra na posição " + indice)
}