const resultado = document.querySelector("#resultado");

//Arrow function não possui ou não acessa 'arguments' (palavra reservada onde pego o nome dos parâmetros). 

// função nominal
// let myFunc = {
//     showArguments() {
//         resultado.innerHTML = arguments; //pega dinamicamente os parâmetros que foram passados
//         console.log(arguments)
//     }
// }

// myFunc.showArguments(
//     "BMW",
//     "AUDI",
//     "MERCEDES",
//     "BENTLEY",
//     "FERRARI",
//     "LAMBORGHINI"
// );

// arrow function - retorna erro
// let myFunc2 = {
//     showArguments2() {
//         resultado.innerHTML = arguments; //pega dinamicamente os parâmetros que foram passados
//         console.log(arguments)
//     }
// }

// myFunc2.showArguments(
//     "Corsa",
//     "Escort",
//     "Uno",
//     "Santana",
//     "Gol",
//     "Fusca"
// );

//Não existe this na arrow function.
let user = {
    name: "Nani",
    usandoArrow: () => {
        console.log(`Meu nome é ${this.name}, com Arrow Function.`)
    },
    usandoNominal() {
        console.log(`Meu nome é ${this.name}, com Nominal Function.`)
    }
}

user.usandoArrow();
user.usandoNominal();

let soma = (a, b) => {
    console.log(a + b);
};

//essa é uma classe com método construtor
let soma2 = function(a, b) {
    console.log(a + b);
};

//new soma(50, 20); //is not a constructor, arrow function não aceita constructor, logo nunca pode ter a instrução 'new'
new soma2(50, 20);

//A arrow function existe para ser usada sempre que não precisar destes recursos

const exemplo = x => console.log(x);

exemplo("teste")