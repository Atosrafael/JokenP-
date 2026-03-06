const result = document.querySelector('.result') //result --> variável que seleciona o elemento com a classe "result" para exibir o resultado do jogo
const humanScore = document.querySelector('#human-score') //humanScore --> variável que seleciona o elemento com o id "human-score" para exibir a pontuação do humano
const machineScore = document.querySelector('#machine-score') //machineScore --> variável que seleciona o elemento com o id "machine-score" para exibir a pontuação da máquina

let humanScoreNumber = 0 //humanScoreNumber --> variável que armazena a pontuação do humano, inicializada em 0
let machineScoreNumber = 0 //machineScoreNumber --> variável que armazena a pontuação da máquina, inicializada em 0

/*
humanScoreNumber -> Camel Case
GAME_OPTIONS     -> Snake Case
*/

//ENUM --> estrutura de dados que representa um conjunto de valores constantes, geralmente relacionados entre si, e é usada para melhorar a legibilidade e a manutenção do código. Em JavaScript, não existe uma estrutura de enumeração nativa, mas podemos simular um enum usando objetos.
const GAME_OPTIONS = { //GAME_OPTIONS --> objeto que contém as opções de jogo, utilizando a convenção de nomenclatura Snake Case
    ROCK: 'rock', 
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoice) => { //humanChoice --> escolha do humano
    playTheGame(humanChoice, playMachine()) //playTheGame --> função que recebe a escolha do humano e da máquina, playMachine() --> função que gera a escolha da máquina
}

const playMachine = () => { // playMachine --> função que gera a escolha da máquina
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS] //choices --> array que contém as opções de escolha da máquina
    const randomNumber = Math.floor(Math.random() * 3) //Math.floor --> arredonda p/ baixo, Math.random() --> gera um número aleatório entre 0 e 1

    return choices[randomNumber] //retorna a escolha da máquina com base no número aleatório gerado
}

const playTheGame = (human, machine) => { //playTheGame --> função que recebe a escolha do humano e da máquina e determina o resultado do jogo

    console.log('Humano: ' + human + " Máquina: " + machine) //exibe no console a escolha do humano e da máquina para fins de depuração

    if (human === machine) { // verifica se a escolha do humano é igual à escolha da máquina, indicando um empate
        result.innerHTML = "Empate!"
    } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        /* verifica as combinações de escolha do humano e da máquina
         para determinar se o humano ganhou, seguindo as regras do jogo: */
        humanScoreNumber++ //incrementa a pontuação do humano em 1
        humanScore.innerHTML = humanScoreNumber //atualiza o elemento de pontuação do humano com o novo valor
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++ //incrementa a pontuação da máquina em 1
        machineScore.innerHTML = machineScoreNumber //atualiza o elemento de pontuação da máquina com o novo valor
        result.innerHTML = "Você perdeu!"
    }
}

/*
pedra > tesoura
tesoura > papel
papel > pedra
*/