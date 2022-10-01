const listaPokemons =[
    {
        "nome": "BULBASAUR",
        "pokenumero": 1,
        "tipo": ["planta", "venenoso"],
        "basico": true,
        "desvantagem": ["fogo", "psíquico", "voador", "gelo"]
    },
    {
        "nome": "SCYTHER",
        "pokenumero": 123,
        "tipo": ["inseto", "voador"],
        "basico": true,
        "desvantagem": ["fogo", "voador", "elétrico", "gelo", "pedra"]
    },
    {
        "nome": "GYRADOS",
        "pokenumero": 130,
        "tipo": ["água", "voador"],
        "basico": false,
        "desvantagem": ["elétrico", "pedra"]
    }
    ]
    

    console.log("SEMANA 3");
    console.log("### Atividade 1 ###")
    
    function desvantagemPokemon (desvantagens) { 
        let desvantagensArray = ["TESTE "]
        for(let i of desvantagens){
            desvantagensArray.push(i)
        }
        
        return desvantagensArray.join()
    };
    listaPokemons[0].desvantagem = desvantagemPokemon(listaPokemons[0].desvantagem),
    listaPokemons[1].desvantagem = desvantagemPokemon(listaPokemons[1].desvantagem),
    listaPokemons[2].desvantagem = desvantagemPokemon(listaPokemons[2].desvantagem)
    
    //ATIVIDADE 2
    console.log("### Atividade 2 ###")
    //bulbasaur
    console.log(listaPokemons[0].nome.toUpperCase());
    for(let i in listaPokemons[0]){
        console.log(`${i} : ${listaPokemons[0][i]}`)
    };
    
    //scyther
    console.log(listaPokemons[1].nome.toUpperCase());
    for(let i in  listaPokemons[1]){
        console.log(`${i} : ${listaPokemons[1][i]}`)
    };
    
    //gyrados
    console.log(listaPokemons[2].nome.toUpperCase());
    for(let i in listaPokemons[2]){
        console.log(`${i} : ${listaPokemons[2][i]}`)
    };
    
    //ATIVIDADE 3
    console.log("### Atividade 3 ###")
    function receberPokemon (listaPokemons){
        let stringDeObjeto = " "
        for(let itens in listaPokemons){
            stringDeObjeto = stringDeObjeto + `${itens} : ${listaPokemons[itens]}. `
        }
        console.log(stringDeObjeto)
        return
    }
    
    receberPokemon(listaPokemons[2])
    
    //ATIVIDADE 4
    console.log("### Atividade 4 ###")
    
    const titulo = prompt("Digite o nome de um dos três pokemons: Scyther, Bulbasaur, Gyrados.").toLowerCase()
    
    function recebeObjetosString (listaObjetos, titulo){
        let novoArray = []
        // for(let item of listaObjetos){
            for(let pokemon of listaObjetos){
                if(pokemon.nome.includes(titulo)){
                    console.log(`Nome do pokemon: ${pokemon.nome}`)
                    novoArray.push(pokemon)
                } 
            } 
        if(novoArray.length < 1){
            alert("Nenhum item foi encontrado.")
            console.log("Nenhum item foi encontrado.")
        }
        
        return novoArray
    }
    
    console.log(recebeObjetosString(listaPokemons, titulo))

    //=== titulo.toUpperCase()//