//Semana 2: transformar os ítens em objeto. Após isso, adicionar os que tem valor da chave booleana true numa array, mas como o valor booleano que atribuí aos objetos pokemons foi a verificação se são básicos ou não e só entra nessa array se o valor do booleano for true, denominei essa array de "soPokemonBasico" e apenas os que tiverem valor true na chave "basico" entram no array, caso não, aciona o alert para o usuário. Usei o if ternário para avaliar o valor booleano de cada ítem "listaPokemons[0].basico".
const listaPokemons =[
    {
        "nome": "BULBASAUR",
        "pokenumero": 1,
        "basico": true,
        "desvantagem": ["fogo", "psíquico", "voador", "gelo"]
    },
    {
        "nome": "SCYTHER",
        "pokenumero": 123,
        "basico": true,
        "desvantagem": ["fogo", "voador", "elétrico", "gelo", "pedra"]
    },
    {
        "nome": "GYRADOS",
        "pokenumero": 130,
        "basico": false,
        "desvantagem": ["elétrico", "pedra"]
    }
    ]

console.log("SEMANA 2")

let soPokemonsBasicos = []
listaPokemons[0].basico ? soPokemonsBasicos.push(listaPokemons[0]) : alert("Bulbasaur não é um pokemon básico, por favor, insira um pokemon básico.")
listaPokemons[1].basico ? soPokemonsBasicos.push(listaPokemons[1]) : alert("Scyther não é um pokemon básico, por favor, insira um pokemon básico.")
listaPokemons[2].basico ? soPokemonsBasicos.push(listaPokemons[2]) : alert("Gyrados não é um pokemon básico, por favor, insira um pokemon básico.")
console.log (soPokemonsBasicos)