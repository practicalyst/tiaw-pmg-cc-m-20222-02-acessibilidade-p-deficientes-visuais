
import { produtos } from "./produtos.js";


const urlParams = new URLSearchParams(location.search);

let secao = urlParams.get("secao");
let titulos = '';

if(secao == 'blusas'){
    titulos = "Blusas"
}

else if(secao == 'parte-inferiores'){
    titulos = "Partes Inferiores"
}
else if(secao == 'conjuntinhos'){
    titulos = "Conjuntinhos"
}



document.querySelector("main").innerHTML =
`   <h2 class="container titulos">${titulos}</h2>
    <div id="${secao}" class="container d-flex flex-wrap justify-content-center">
    
    </div>`

let divSecao = document.querySelector(`#${secao}`);

produtos.forEach(element => {
    if(element["secao"] == secao){
        divSecao.innerHTML += ` <div class="card shadow" style="width: 20rem;">
        <img src="${element["imagem"]}" class="card-img-top" alt="${element["nome"]}">
    <div class="card-body">
        <h5 class="card-title" tabindex="0">${element["nome"]}</h5>
        <p class="card-text" tabindex="0"><b>Estilo: </b> ${element["estilo"]}</p>
        <p class="card-text" tabindex="0"><b>Cor do Produto: </b>${element["corEmDestaque"]}</p>
        <p class="card-text" tabindex="0"><b>Emoções relacionadas: </b>${element["emocoesTransmitidas"].toString()}</p>
        <a href="/src/detalhes.html?id=${element["id"]}" class="btn btn-primary" tabindex="0">Ver Mais</a>
    </div>
</div>`
    }   
});