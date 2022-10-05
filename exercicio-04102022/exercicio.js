const aereas = [
    "Latam",
    "Gol",
    "Azul",
    "Delta",
    "American Airlines",
    "Emirates",
    "Qatar",
];

const comboAereas = document.createElement("select");
comboAereas.setAttribute("id", "aereas");

aereas.forEach((aerea, key) => {
    comboAereas.innerHTML += `<option value="${key}">${aerea}</option>`;
});
  //adicione este combo como um filho no body, no final de todas as tags.
document.querySelector("body").appendChild(comboAereas);
const menu = [
    "Todos",
    "Venda na Amazon",
    "Ofertas do Dia",
    "Prime",
    "Eletrônicos",
    "Ideias para Presente",
    "Brinquedos e Jogos",
    "Computadores",
    "eBooks Kindle",
    "Games",
    "Ferramentas e Construção",
    "Livros",
];

const ulMenu = document.createElement("ul");
ulMenu.setAttribute("id", "menu");
ulMenu.setAttribute("class", "menu-site");

menu.forEach((value, index) => {
    ulMenu.innerHTML += `<li>${value}</li>`;
});

document.querySelector("nav").appendChild(ulMenu);