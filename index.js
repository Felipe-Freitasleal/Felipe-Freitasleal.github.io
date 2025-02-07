///// LISTA DE POKEMONS
const listaPokemons =[
    {
        "nome": "BULBASAUR",
        "pokenumero": 1,
        "tipo": ["grama", " veneno"],
        "basico": true,
        "desvantagem": ["fogo", " psíquico", " voador", " gelo"],
        "foto": '/process/assets/bulba.png'
    },
    {
        "nome": "SCYTHER",
        "pokenumero": 123,
        "tipo": ["inseto", " voador"],
        "basico": true,
        "desvantagem": ["fogo", " voador", " elétrico", " gelo", " pedra"],
        "foto": "/process/assets/scy.png"
    },
    {
        "nome": "GYRADOS",
        "pokenumero": 130,
        "tipo": ["água", " voador"],
        "basico": false,
        "desvantagem": ["elétrico", " pedra"],
        "foto": "/process/assets/gyr.png"
    },
    {
        "nome": "WOBBUFFET",
        "pokenumero": 202,
        "tipo": ["psiquico"],
        "basico": false,
        "desvantagem": ["fantasma", " escuro", " inseto"],
        "foto": "/process/assets/wobbu.png"
    },
    {
        "nome": "ODDISH",
        "pokenumero": 43,
        "tipo": ["grama", " veneno"],
        "basico": true,
        "desvantagem": ["fogo", " psiquico", " voador", " gelo"],
        "foto": "/process/assets/odd.png"
    },
    {
        "nome": "PIKACHU",
        "pokenumero": 25,
        "tipo": ["elétrico"],
        "basico": false,
        "desvantagem": ["terra"],
        "foto": "/process/assets/pikachu.png"
    },
    {
        "nome": "SANDSLASH",
        "pokenumero": 28,
        "tipo": ["terra"],
        "basico": false,
        "desvantagem": ["água", " grama", " gelo"],
        "foto": "/process/assets/sand.png"
    },
    {
        "nome": "CHARIZARD",
        "pokenumero": 6,
        "tipo": ["fogo", "voador"],
        "basico": false,
        "desvantagem": ["água", "elétrico", "pedra"],
        "foto": "/process/assets/char.png"
    }
    ]

///////////  RENDERIZAR OS POKEMONS NA TELA
function criarPokemon(pokemon){
    const pokemonNovo = document.createElement("article");
    pokemonNovo.setAttribute("class", "pokemon-listado");
    const chamarListaPokemon = document.getElementById("lista-pokemon");
    chamarListaPokemon.appendChild(pokemonNovo);

    const pNomePokemon = document.createElement("p");
    pNomePokemon.setAttribute("id", "nome-pokemon");
    const conteudoNomePokemon = document.createTextNode(`Nome: ${pokemon.nome}`);
    pNomePokemon.appendChild(conteudoNomePokemon);

    const pPokenumeroPokemon = document.createElement("p");
    pPokenumeroPokemon.setAttribute("id", "pokenumero-pokemon");
    const conteudoPokenumeroPokemon = document.createTextNode(`Pokénúmero: ${pokemon.pokenumero}`);
    pPokenumeroPokemon.appendChild(conteudoPokenumeroPokemon);

    const pTipoPokemon = document.createElement("p");
    pTipoPokemon.setAttribute("id", "tipo-pokemon");
    const conteudoTipoPokemon = document.createTextNode(`Tipo: ${pokemon.tipo}`);
    pTipoPokemon.appendChild(conteudoTipoPokemon);

    const pBasicoPokemon = document.createElement("p");
    pBasicoPokemon.setAttribute("id", "basico-pokemon");
    const conteudoBasicoPokemon = document.createTextNode(pokemon.basico? "Básico: Sim" : "Básico: Não");
    pBasicoPokemon.appendChild(conteudoBasicoPokemon);

    const pDesvantagensPokemon = document.createElement("p");
    pDesvantagensPokemon.setAttribute("id", "desvantagens-pokemon");
    const conteudoDesvantagensPokemon = document.createTextNode(`Desvantagens: ${pokemon.desvantagem}`);
    pDesvantagensPokemon.appendChild(conteudoDesvantagensPokemon);

    const fotoPokemon = document.createElement("img");
    fotoPokemon.src = pokemon.foto
    fotoPokemon.setAttribute("class", "fotoPokemon");
    
    pokemonNovo.insertAdjacentElement("beforeend", pNomePokemon)
    pokemonNovo.insertAdjacentElement("beforeend",  pPokenumeroPokemon)
    pokemonNovo.insertAdjacentElement("beforeend",  pTipoPokemon)
    pokemonNovo.insertAdjacentElement("beforeend",  pBasicoPokemon)
    pokemonNovo.insertAdjacentElement("beforeend",  pDesvantagensPokemon)
    pokemonNovo.insertAdjacentElement("afterbegin",  fotoPokemon)
}

for(pokemon of listaPokemons){
    // console.log(pokemon)
    criarPokemon(pokemon)
}

/////// MOSTRA A MÉDIA DO POKÉNUMERO DE TODOS OS POKEMONS
let mediaPokemon = [0]

for(pokemon of listaPokemons){
    let somar = pokemon.pokenumero + mediaPokemon[0]
    mediaPokemon = []
    mediaPokemon.push(somar)
    console.log(`Pokénúmero total com o de ${pokemon.nome}: ${mediaPokemon}`)
}

console.log(`Média dos Pokénúmeros : ${mediaPokemon / 2}`)

//////// "FOR" PARA RENDERIZAR O(S) POKEMON(S) PESQUISADO(S) POR CADA LETRO DO NOME
function recebeObjetosString (listaPokemons, event){
    event.preventDefault();
    const limparLista = document.getElementById("lista-pokemon");
    limparLista.innerHTML="";
    let novoArray = [];
    const busca = document.getElementById("buscarPokemon");

    for(let pokemon of listaPokemons){
        if(pokemon.nome.includes(busca.value.toUpperCase())){
            console.log(pokemon)
            novoArray.push(pokemon)
            criarPokemon(pokemon)
        } 
    } 
    if(novoArray.length < 1){
        alert("Nenhum item foi encontrado.")
        console.log("Nenhum item foi encontrado.")
    }
    return novoArray
}


