const carros = document.querySelector('#carros')
const carrosArray = [
    "Chevrolet", 
    "Fiat", 
    "Ford", 
    "Honda", 
    "Hyundai", 
    "Kia", 
    "Mazda", 
    "Mercedes-Benz", 
    "Nissan", 
    "Peugeot", 
    "Renault", 
    "Toyota", 
    "Volkswagen"
];

//para cada item que tenha no meu carrosArray
//key é a posição, value é o item do array
//forEach só pode receber até 2 parametros
//posso fazer um forEach dentro de outro forEach
carrosArray.forEach((value, key) => {
    carros.innerHTML += `<option value="${key}">${value}</option>`
});

//carrosArray.forEach((value) => console.log(value));

const importados = [["320i", "M3", "M4", "X5", "X6", "z4 m40i"],
["Audi", "a4", "s4", "s4 avanti", "Q7", "RS7", "e-Tron"],
["Mercedes", "gtr", "e63", "s63", "brabus gle", "AMG G63"],
]

importados.forEach((marcas) => {
    const select = document.createElement("select");
    select.setAttribute("id", marcas[0]);
        marcas.forEach((carros, key) => {
            if(key > 0) {
                select.innerHTML += `<option value="${carros}">${carros}</option>`
            }
        })

    document.querySelector("body").appendChild(select)
    console.log("importados", marcas)
});
//////////////////////////////////////////////////////////////////////

const newCarros = ['Corsa', 'Uno', 'Gol', 'Palio', 'Kombi', '208'];
//adicionar um elemento no final do array: push
newCarros.push('Celta', 'Monza');
//adiciona um elemento no inicio do array: unshift
newCarros.unshift('Fusca');
//remove um elemento no final do array: pop
const ultimo = newCarros.pop(); //retorna o elemento removido, por isso posso armazenar numa variável caso queira, não é obrigatório armazenar
//remove um elemento do inicio do array: shift
const primeiro = newCarros.shift();
//split fatia/quebra o texto em vários arrays, precisa do separador para saber onde quebrar
const nomeCompleto = 'Nani Bunny Happy';
const nomeArray = nomeCompleto.split(" "); //toda vez que encontrar um espaço vazio, divida num array
//join pega um array de várias posições e junta-o, transformando em um texto
const americanName = [nomeArray.at(-1), nomeArray[0]].join(', ');
//splice é para remover em intervalos, na posição 2, remova 3 - altera o array original - (início, quantidade)
const removeUm = newCarros.splice(2, 3);

// console.log(removeUm, "Remove três, splice");
// console.log(americanName, "Formato americano")
// console.log(newCarros, "NewCarros")
console.log("-----------------------------------")
//slice, para programação funcional, ele não altera o array original, ele gera um novo array/copia o array
const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia'];
const primeiras = frutas.slice(1, 3); //pega maçã e pera, para em uva (3), mas não o inclui
console.log(primeiras, 'slice - a partir da primeira posição até a terceira copie, mas não traga a terceira')
//1ª posição é o mesmo que posição de índice zero, pois começa em zero
//split
//join
console.log("-----------------------------------")
//Programação funcional - imutabilidade, os dados não mudam. O array original não é alterado
//map - retorna um novo array com os itens filtrados. Passa em todas as posições do array, do início ao fim, mesmo que seja false.
const filtro = (item) => {
    return item === "Pera" || item === "Maçã";
    //return item.toLowerCase(); //vai retornar todos os itens do array em letra minuscula
};
console.log(filtro("Chocolate")); //false
console.log(filtro("Pera")); //true

const frutasMap = frutas.map(filtro);
//filter - vai do inicio ao fim do array, porém só retorna aquelas cuja condição é true
const frutasFilter = frutas.filter(filtro);
//find - retorna string, retorna a primeira ocorrência, assim que ele encontra, para de ler
const frutasFind = frutas.find(filtro);

console.log(frutasMap);//false, true, true, false, false
console.log(frutasFilter);//Maçã, Pera
console.log(frutasFind); //Maçã

console.log("-----------------------------------")
//map - classifique todos. 19 -> adulto - mapAge
const ages = [1, 2, 3, 4, 8, 9, 12, 15, 18, 19, 24, 35, 38, 42, 51, 55, 60, 63, 88]
const ageFilter = (age) => {
    if(age <= 2) {
        return 'baby';
    } else if(age >= 3 && age < 18) {
        return 'child';
    } else if(age >= 18 && age < 61) {
        return 'adult';
    } else {
        return 'elder';
    }
}
const mapAge = ages.map(ageFilter);
console.log(mapAge);

console.log("-----------------------------------")
//filter - somente maiores de idade - filterAge
const adultFilter = (age) => {
    if(age >= 18) {
        return age;
    }
}

const filterAge = ages.filter(adultFilter);
console.log(filterAge);

console.log("-----------------------------------")
//find - encontre o primeiro idoso - findAge
const elderFilter = (age) => {
    if(age > 60) {
        return age;
    }
}

const findAge = ages.find(elderFilter);
console.log(findAge);

console.log("-----------------------------------")