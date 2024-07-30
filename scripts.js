

const key = "3905a61b1746dd252625dcd0989de144"


function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = dados.main.temp+"ºC"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " +dados.main.humidity +"%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`



    /*
    innerHTML - faz com que se mude o texto na caixa
    */
}



async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    /* variavel 'dados'vai guardar os dados do servidor 
    *await - manda o código esperar até a resposta do servidor chegar
    *fecth() - ferramenta que permite o js acessar o servidor 
    *dentro do fecth() foi colocado o endereço do servidor
    */
    /*'async function' é usada para quando a função vai acessar um servidor
    *foi trocado as "" por ``, as crases permitem colocarmos variaveis dentro do texto
    */
   colocarDadosNaTela(dados) /*esta linha de código está mandando os dados aqui coletanos para a função "colocarDadosNaTela()"*/
}




function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value/*foi criado uma variavel 'cidade'. esta variável vai buscar um elemento no html
    *document - 'apelido' do html dentro do js
    *querySelector - procura alguma coisa que está dentro do html (neste casi o valor da classe ".input-cidade")
    */
    buscarCidade(cidade)
}