/*
Passo a passo: 
    1. selecionar pokemon da listagem;
    2. esconder cartao aberto;
    3. mostrar cartao correspondente ao que foi selecionado.

  Para isso vamos precisar trabalhar com 2 elementos: listagem e cartao do pokemon (duas variaveis): 
  - trabalhar com um evento de click feito pelo usuario na listagem de pokemons (remover classe aberto só do cartao aberto).
  - pegar 'id'(identificador para saber qual estamos clicando) ao clicar no pokemon da listagem para saber qual cartao mostrar;
  - remover classe 'aberto' que marca o pokemon selecionado;
  - adicionar a classe 'aberto' no item da lista selecionado;  
  ---> e refazer os passos com a classe 'ativo'
  
  *DICA: sempre trabalhar com classes quando precisar tirar ou colocar classes.
*/ 


// Criar duas variaveis no JS para trabalhar com os elementos da tela.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')  //selecionamos tudo que tem classe 'pokemon'
const pokemonsCard = document.querySelectorAll('.cartao-pokemon') // variavel que busca os cartoes de pokemons.


// objetivo: trabalhar com um evento de click feito pelo usuario na listagem de pokemons.
listaSelecaoPokemons.forEach(pokemon => {
    // o metodo 'forEach' significa "para cada";  '=>' significa arrow function(funcoes de seta)é um jeito moderno de estabelecer uma funçao.. tem o mesmo significado que uma funçao.


    pokemon.addEventListener('click', () => {  // evento requisita click (acao) para comecar a rodar.
        // cria 1 evento de click em todas as classes pokemon, diferenciadas pelo id.


        //remover a classe aberto do cartao aberto (criar ids)
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        // ao clicar no  pokemon da listagem, pegamos o id para saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado  // o '+', alem de representar uma soma, no JS eu posso usar ele para concatenar e juntar 2 pedaços de elementos diferentes para formar um elemento só; Separei a concatenação para melhor visualizacao.

        // esconde cartao anterior e mostra o cartao que foi selecionado 
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')


        //fazer a msm coisa com a classe 'ativo'
        //Remover classe ativo do elemento selecionado (fazer a mesma coisa que fez na classe aberto)
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })  
})   