//Semana 1: criar uma lista de ítens: criei uma lista de Pokémons.
//Semana 2: transformar os ítens em objeto. Após isso, adicionar os que tem valor da chave booleana true numa array, mas como o valor booleano que atribuí aos objetos pokemons foi a verificação se são básicos ou não e só entra nessa array se o valor do booleano for true, denominei essa array de "soPokemonBasico" e apenas os que tiverem valor true na chave "basico" entram no array, caso não, aciona o alert para o usuário. Usei o if ternário para avaliar o valor booleano de cada ítem "bulbasaur.basico".
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
const gyrados ={
    nome: "Gyrados",
    pokenumero: 130,
    basico: false,
    desvantagem: ["elétrico", "pedra"]
}

//Semana 1
console.log("SEMANA 1")

const mediaPokenumero = bulbasaur.pokenumero + scyther.pokenumero +gyrados.pokenumero / 3
console.log (mediaPokenumero)

const basicos = bulbasaur.basico && scyther.basico && gyrados.basico
console.log (basicos)

//Semana 2
console.log("SEMANA 2")

let soPokemonsBasicos = []

bulbasaur.basico ? soPokemonsBasicos.push(bulbasaur) : alert("Bulbasaur não é um pokemon básico, por favor, insira um pokemon básico.")
scyther.basico ? soPokemonsBasicos.push(scyther) : alert("Scyther não é um pokemon básico, por favor, insira um pokemon básico.")
gyrados.basico ? soPokemonsBasicos.push(gyrados) : alert("Gyrados não é um pokemon básico, por favor, insira um pokemon básico.")

console.log (soPokemonsBasicos)

//Semana 3
console.log("SEMANA 3");
console.log("Atividade 1")

function desvantagemPokemon (desvantagens) { 
    let desvantagensArray = ["TESTE "]
    for(let i of desvantagens){
        desvantagensArray.push(i)
    }
    
    return desvantagensArray.join()
};
bulbasaur.desvantagem = desvantagemPokemon(bulbasaur.desvantagem)
scyther.desvantagem = desvantagemPokemon(scyther.desvantagem)
gyrados.desvantagem = desvantagemPokemon(gyrados.desvantagem)

//ATIVIDADE 2
console.log("Atividade 2")
//bulbasaur
console.log(bulbasaur.nome.toUpperCase());
for(let i in bulbasaur){
    console.log(`${i} : ${bulbasaur[i]}`)
};

//scyther
console.log(scyther.nome.toUpperCase());
for(let i in scyther){
    console.log(`${i} : ${scyther[i]}`)
};

//gyrados
console.log(gyrados.nome.toUpperCase());
for(let i in gyrados){
    console.log(`${i} : ${gyrados[i]}`)
};

//ATIVIDADE 3
console.log("Atividade 3")
function receberPokemon (pokemon){

        console.log(pokemon.desvantagem)
        return pokemon.desvantagem
}

receberPokemon(bulbasaur)

//ATIVIDADE 4
console.log("Atividade 4")

const arrayObjetos = [bulbasaur, scyther, gyrados]
const string = "bulbasaur"


function recebeObjetosString (objeto, string){
    const novoObjeto = {}
    if(objeto == string){
        novoObjeto.objeto
        console.log(novoObjeto)
        return novoObjeto
    } else {
        alert("Nenhum item foi encontrado.")
    }
}

recebeObjetosString(arrayObjetos, string)