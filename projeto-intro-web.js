//Lista Pokémons

const nome1 = "Bulbasaur"
const pokenumero1 = 1
const Basico1 = True 
const desvantagem1 = ["fogo", "psíquico", "voador", "gelo"]

const nome2 = "Scyther"
const pokenumero2 = 123
const Basico2 = True 
const desvantagem2 = ["fogo", "voador", "elétrico", "gelo", "pedra"]

const nome3 = "Gyarados"
const pokenumero3 = 130
const Basico3 = False 
const desvantagem3 = ["eletrico", "pedra"]

const mediaPokenumero = (pokenumero1 + pokenumero2 + pokenumero3 / 3)
console.log (mediaPokenumero)

const Basicos = Basico1 && Basico2 && Basico3
console.log (Basicos)

console.log (`
${nome1.toUpperCase()}
Pokenúmero : ${pokenumero1}
É básico? ${Basico1}
Desvantagem: ${desvantagem1}
`)

console.log (`
${nome2.toUpperCase()}
Pokenúmero : ${pokenumero2}
É básico? ${Basico2}
Desvantagem: ${desvantagem2}
`)

console.log (`
${nome3.toUpperCase()}
Pokenúmero : ${pokenumero3}
É básico? ${Basico3}
Desvantagem: ${desvantagem3}
`)
