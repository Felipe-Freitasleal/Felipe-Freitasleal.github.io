//Semana 1: cria uma lista de ítens: criei uma lista de Pokémons.
//Semana 2: transformar os ítens em objeto. Após isso, adicionar os que tem valor da chave booleana true numa array, mas como o valor booleano que atribuí aos objetos pokemons foi a verificação se são básicos ou não e só entra nessa array se o valor do booleano fo true, denominei esa array de "soPokemonBasico" e apenas os que tiverem valor true na chave "basico" entram no array, caso não, aciona o alert para o usuário. Usei o if ternário para avaliar o valor booleano de cada ítem "bulbasaur.basico".
const bulbasaur ={
    nome: "Bulbasaur",
    pokenumero: 1,
    basico: true,
    desvantagem: ["fogo", "psíquico", "voador", "gelo"]
}
const scyther = {
    nome: "Scyther",
    pokenumero: 123,
    basico: true,
    desvantagem: ["fogo", "voador", "elétrico", "gelo", "pedra"]
}
const gyarados ={
    nome: "Gyrados",
    pokenumero: 130,
    basico: false,
    desvantagem: ["eletrico", "pedra"]
}

//Semana 2
let soPokemonbasico = []
bulbasaur.basico?soPokemonbasico.push(bulbasaur):alert("Bulbasaur não é um pokemon básico, por favor, insira um pokemon básico.")
scyther.basico?soPokemonbasico.push(scyther):alert("Scyther não é um pokemon básico, por favor, insira um pokemon básico.")
gyarados.basico?soPokemonbasico.push(gyarados):alert("Gyrados não é um pokemon básico, por favor, insira um pokemon básico.")
console.log (soPokemonbasico)
//Semana 1
const mediaPokenumero = bulbasaur.pokenumero + scyther.pokenumero +gyarados.pokenumero / 3
console.log (mediaPokenumero)
const basicos = bulbasaur.basico && scyther.basico && gyarados.basico
console.log (basicos)
console.log (bulbasaur)
console.log (scyther)
console.log (gyarados)