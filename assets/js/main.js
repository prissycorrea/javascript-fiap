//console.log(nome, " chamando a variavel usando o var");
//const nome = "Avanade";

//escreve("Museu do Ipiranga");
//Função nominal: função que dei nome e criei com function
//function escreve(x) {
//    console.log(x);
//}

//Existem dois passos para trabalhar com funções: criá-las e chamá-las
/*Dentro do JavaScript existem 4 tipos de funções
1. Função nominal = sofre hoisting, é criado com function e tem um nome;
2. Expressão de função = uma função em que o valor dela é uma função. Uma variável que recebe uma função, essa variável é agora o nome dessa função. O target é pra deixar mais genérico;
3. Função anônima: uma função sem nome, não pode ser chamada novamente depois, a não ser que esteja atribuída a uma constante, mas aí ela deixa de ser função anônima e passa a ser expressão de função.
*/

//Função nominal
// function mudaTitulo(novoTitulo) {
//     document.querySelector("h1").innerHTML = novoTitulo;
// };
// mudaTitulo("Nani, te amo!");

// //Expressão de função
// const mudaTitulo2 = function(target, novoTitulo) {
//     document.querySelector(target).innerHTML = novoTitulo;
// };
// mudaTitulo2("h2", "Trocando subtitulo");

// //Arrow function
// const relogio = () => {
//     const date = new Date();
//     mudaTitulo2("h2", date.toLocaleTimeString())
// }

// //função interna de intervalo (nome da função a chamar, intervalo em milissegundos)
// setInterval(relogio, 1000);

const frases = [
    "Um banco para 20 milhões de pessoas",
    "C6 Bank, o seu banco",
    "Cartão de crédito sem anuidade",
    "Venha para o C6"
];

const mudaFrase = (target, frases, tempo) => {
    let total = 0;
    setInterval(() => {
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1 ? (total = 0) : (total += 1)]; //condicao ? verdade : falso... o -1 é pq o array começa em zero
    }, tempo * 1000)
}

mudaFrase("h1", frases, 4)

// let count = 0;

// const mudaFrase = function(novoTitulo) {
//     novoTitulo = (frases[count]);
//     document.querySelector("h1").innerHTML = novoTitulo;
//     if (count > frases.length) {
//         count = 0;
//     } else {
//         count++;
//     }
//     setInterval(mudarFrases, 5000);
// };

// mudarFrases();