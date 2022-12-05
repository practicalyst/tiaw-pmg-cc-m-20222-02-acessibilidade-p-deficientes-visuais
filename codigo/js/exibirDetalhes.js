import { produtos } from "./produtos.js";


const urlParams = new URLSearchParams(location.search);

/*
function pegarItensArray(itens){
    let str = '';
    console.log(itens);
    itens.forEach(element => {
        str += element + ' ';
    });
    return str;
}
*/

let id = urlParams.get("id");
let divProdutoPrincipal = document.querySelector("#produto-principal");

let produtoPrincipal = produtos[parseInt(id) - 1];

//let coresAnalogas = pegarItensArray(produtoPrincipal["coresAnalogas"]);
let coresAnalogas = produtoPrincipal["coresAnalogas"].toString();
//let coresComplementares = pegarItensArray(produtoPrincipal["coresComplementares"]);
let coresComplementares = produtoPrincipal["coresComplementares"].toString();


let emocoes = produtoPrincipal["emocoesTransmitidas"].toString();

let monocromaticos = document.querySelector("#monocromaticos");
let complementares = document.querySelector("#complementares");

divProdutoPrincipal.innerHTML = 
                `<div class="card mb-3" style="max-width: 800px; height: auto;">
                    <div class="row g-0">
                        <div class="col-md-6">
                        <img src="${produtoPrincipal["imagem"]}" class="img-fluid rounded-start" alt="${produtoPrincipal["descricao"]}">
                    </div>
                    <div class="col-md-6">
                        <div class="card-body">
                            <h5 class="card-title">${produtoPrincipal["nome"]}</h5>
                            <div class="card" style="width: 20rem">
                                <div class="card-header" tabindex="0">
                                    Características
                                </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" tabindex="0">Estilo de Roupa: ${produtoPrincipal["estilo"]}</li>
                                <li class="list-group-item" tabindex="0">Categoria: ${produtoPrincipal["secao"]}</li>
                                <li class="list-group-item" tabindex="0">Emoções: ${emocoes}</li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    </div>  `


console.log(coresAnalogas);
console.log(coresComplementares);
                    
produtos.forEach(element => {
    if(coresAnalogas.indexOf(element["corEmDestaque"]) >= 0 || element["corEmDestaque"] == 'preto'){
        console.log("Analoga", element);
        
        monocromaticos.innerHTML += `
        <div class="card shadow" style="width: 20rem;">
                <img src="${element["imagem"]}" class="card-img-top" alt="${element["nome"]}">
            <div class="card-body">
                <h5 class="card-title" tabindex="0">${element["nome"]}</h5>
                <p class="card-text" tabindex="0"><b>Estilo: </b> ${element["estilo"]}</p>
                <p class="card-text" tabindex="0"><b>Cor do Produto: </b>${element["corEmDestaque"]}</p>
                <p class="card-text" tabindex="0"><b>Emoções relacionadas: </b>${element["emocoesTransmitidas"].toString()}</p>
                <a href="../src/detalhes.html?id=${element["id"]}" class="btn btn-primary" tabindex="0">Ver Mais</a>
            </div>
        </div>`
    }

    if(coresComplementares.indexOf(element["corEmDestaque"] >= 0 || element["corEmDestaque"] == 'branco')){
        console.log("Complementar:", element);

        complementares.innerHTML += `
        <div class="card shadow" style="width: 20rem;">
                <img src="${element["imagem"]}" class="card-img-top" alt="${element["nome"]}">
            <div class="card-body">
                <h5 class="card-title" tabindex="0">${element["nome"]}</h5>
                <p class="card-text" tabindex="0"><b>Estilo: </b> ${element["estilo"]}</p>
                <p class="card-text" tabindex="0"><b>Cor do Produto: </b>${element["corEmDestaque"]}</p>
                <p class="card-text" tabindex="0"><b>Emoções relacionadas: </b>${element["emocoesTransmitidas"].toString()}</p>
                <a href="../src/detalhes.html?id=${element["id"]}" class="btn btn-primary" tabindex="0">Ver Mais</a>
            </div>
        </div>`
    
    }



});

                    
