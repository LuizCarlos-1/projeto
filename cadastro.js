let nome = document.getElementById("nome")
let Lista_de_jogos = document.querySelector(".Lista_de_jogos")
let descrição = getElementById(descrição)
let jogos = [];


function cadastrar_jogo() {
    novo_jogo = Jogo(nome.value, descrição.value)
    jogos.push(novo_jogo);
    console.log(novo_jogo);

    Lista_de_jogos.innerHTML = "";

    // jogos.map = (function (_jogo, posição_array) {
    //    const div = document.createElement("div")
    //     div.innerHTML =
    //         `
    //    <p>${jogos[contadora].nome}</p>
    //    <p>${jogos[contadora].descrição}</p>
    // `
    //     Lista_de_jogos.appendChild(div)
    // })
}
   
for (let i = 0; i < jogos.length; i++){
    const nome = document.createElement("h3");
    const descrição = document.createElement("p");

    nome.textContent = jogos[i].nome;
    descrição.textContent = jogos[1].descrição;

    Lista_de_jogos.appendChild(nome)
    Lista_de_jogos.appendChild(descrição)
}



const Jogo = (nome, descrição) => {
    nome,
        descrição
}


