//Semana 1: criar uma lista de ítens: criei uma lista de Pokémons.

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

//Semana 1
console.log("SEMANA 1")

const mediaPokenumero = listaPokemons[0].pokenumero + listaPokemons[1].pokenumero + listaPokemons[2].pokenumero / 3
console.log (mediaPokenumero)

const basicos = listaPokemons[0].basico && listaPokemons[1].basico && listaPokemons[2].basico
console.log (basicos)