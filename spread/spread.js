const aereasNacional = [
    'Latam',
    'Gol',
    'Azul'
]

//atribuição por desestruturação de arrays.
const [latam, gol, azul] = aereasNacional;
console.log(azul)

//junta os 2 arrays
const airCompanies = [
    ...aereasNacional,
    'Delta',
    'United Airlines',
    'Emirates'
];

console.log(airCompanies);

//const [latam, gol, azul, ...internacionais] = airCompanies;

const user = {
    name: "Nani",
    email: "nani@bunnies.com",
    password: "Sfgrf854fDGE3#"
}

//ATRIBUIÇÃO POR DESESTRUTURAÇÃO + SPREAD OPERATOR, destructuring assignment
//retirou o password
const { password, ...data } = user;
console.log("OMG!", data);