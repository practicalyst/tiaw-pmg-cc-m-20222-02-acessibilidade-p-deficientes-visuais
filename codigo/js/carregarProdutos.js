import { produtos } from "./produtos.js";


//let conjuntinhos = document.querySelector("#conjuntinhos");
//let blusas = document.querySelector("#blusas");

// produto deve ser um elemento json
export function adicionarProduto(produto, divProduto){
    
    let emocoesTransmitidas = produto["emocoesTransmitidas"].toString(); 
    
    divProduto.innerHTML += `
        <div class="card shadow" style="width: 20rem;">
                <img src="${produto["imagem"]}" class="card-img-top" alt="${produto["nome"]}">
            <div class="card-body">
                <h5 class="card-title" tabindex="0">${produto["nome"]}</h5>
                <p class="card-text" tabindex="0"><b>Estilo: </b> ${produto["estilo"]}</p>
                <p class="card-text" tabindex="0"><b>Cor do Produto: </b>${produto["corEmDestaque"]}</p>
                <p class="card-text" tabindex="0"><b>Emoções relacionadas: </b>${emocoesTransmitidas}</p>
                <a href="/src/detalhes.html?id=${produto["id"]}" class="btn btn-primary" tabindex="0">Ver Mais</a>
            </div>
        </div>`
}

(function (){

    produtos.forEach(element => {
        console.log("Adicionando ", element["nome"], "na página principal \n");

        let div = document.querySelector(`#${element["secao"]}`);

        adicionarProduto(element, div);

    })
})()



/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


*/