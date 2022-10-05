const cep = document.querySelector('#cep');

//o evento blur significa que clicamos na caixa de texto e saimos dela
//o erro mais comum de JS com formulário é capturar o value fora de um evento, pois fora do evento ele sempre virá vazio
cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", ""); //substitua... procure um - e substitua por vazio;
    const options = {
        method: 'GET',
        mode: 'cors', //sem essa linha, não terá autorização para acessar
        cache: 'default'
    }

    //fetch vai gerar uma promise. Uma promessa de que algo vai acontecer
    //se der certo, ele vai retornar o resultado. Se der errado, ele vai retornar um erro
    //se der certo nós resolvemos a promise. Se der errado, nós rejeitamos a promise.
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    //se der certo, converta em json
        .then(response => {
            response.json()
            //se der certo, faça isso:
            .then(result => console.log(result))
        })
        //se der erro:
        .catch((e) => console.log(e.message));

});

//cors - cross origin domain, significa que aceito que um servidor acesse outro