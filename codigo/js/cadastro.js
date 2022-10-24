const inputFile = document.querySelector("#imagemProduto__input");
const pictureImage = document.querySelector(".exibeImagem");
const pictureImageTxt = "Adicione uma Imagem para o Produto";

const nomeProduto = document.querySelector("#nomeProduto");
const descricaoProduto = document.querySelector("#descricaoProduto");
const corProduto = document.querySelector("#corProduto");
const materialProduto = document.querySelector("#materialProduto");
const categoriaProduto = document.querySelector("#categoriaProduto");
const tamanhoProduto = document.querySelector("#tamanhoProduto");
const estiloProduto = document.querySelector("#estiloProduto");
const coresCombinamProduto = document.querySelector("#coresCombinamProduto");
const linksSemelhantes = document.querySelector("#linksSemelhantes");
const linksCombinam = document.querySelector("#linksCombinam");
var imagemLink = '';

const btnCadastro = document.querySelector("#btnCadastro");

const produtosCadastrados = document.querySelector(".produtosCadastrados");

pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    console.log(file);

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function (e) {
            const readerTarget = e.target;
        
            const img = document.createElement('img');
            imagemLink = readerTarget.result;
            img.src = readerTarget.result;
            img.classList.add('imagemProduto__img');
            
            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);

        //pictureImage.innerHTML = "Imagem selecionada";
    }
    else {
        pictureImage.innerHTML = "Imagem não selecionada."
    }
});

btnCadastro.addEventListener('click', function (e) { 
    
    
    console.log(e.target);

    var secao = '';


    if(categoriaProduto.value.substr(-1) == 'M'){
        secao = "masculino";
    }
    else {
        secao = "feminino";
    }

    let lengthLocalDB = localDB[secao].length;
    console.log(localDB[secao][lengthLocalDB - 1]);


    localDB[secao].length["id"] = lengthLocalDB;
    localDB[secao].length["imagem"] = imagemLink;
    localDB[secao].length["nome"] = nomeProduto.value;
    localDB[secao].length["descrição"] = descricaoProduto.value;
    localDB[secao].length["categoria"] = categoriaProduto.value;
    localDB[secao].length["tamanho"] = tamanhoProduto.value;
    localDB[secao].length["material"] = materialProduto.value;
    localDB[secao].length["cor"] = corProduto.value;
    localDB[secao].length["estilo"] = estiloProduto.value;
    localDB[secao].length["coresCombinam"] = coresCombinamProduto.value;
    localDB[secao].length["linksSemelhantes"] = linksSemelhantes.value;
    localDB[secao].length["linksCombinam"] = linksCombinam.value;


    console.log("id: ",lengthLocalDB);
    console.log("imagem: " ,imagemLink);
    console.log("nome: ",nomeProduto.value);
    console.log("descrição: ",descricaoProduto.value);
    console.log("categoria: ",categoriaProduto.value);
    console.log("tamanho: ",tamanhoProduto.value);
    console.log("material: ", materialProduto.value);    
    console.log("cor: ",corProduto.value);
    console.log("estilo: ",estiloProduto.value);
    console.log("cores que combinam: ",  coresCombinamProduto.value);
    console.log("links semelhantes: ", linksSemelhantes.value);
    console.log("links que combinam", linksCombinam.value);
    
    let pNome = document.createElement('p');
    let pDescricao = document.createElement('p');
    let pCategoria = document.createElement('p');

    let nImg = document.createElement('img');

    let nProduto = document.createElement('div');

    nImg.src = imagemLink;
    nProduto.appendChild(nImg);

    pNome.innerText = nomeProduto.value;
    nProduto.appendChild(pNome);

    pCategoria.innerText = categoriaProduto.value;
    nProduto.appendChild(pCategoria);

    pDescricao.innerText = descricaoProduto.value;
    nProduto.appendChild(pDescricao);

    produtosCadastrados.appendChild(nProduto);


    alert("Cadastro Realizado com Sucesso! - no Local Storage");

});

window.onload = function(e){

    console.log(localDB['masculino'].length);
    console.log(localDB["masculino"][0]["nome"]); 
    


    for(let i = 0; i < localDB["masculino"].length; i++){
        
        let pNome = document.createElement('p');
        let pDescricao = document.createElement('p');
        let pCategoria = document.createElement('p');
        let nImg = document.createElement('img');
        let nProduto = document.createElement('div');

        nImg.src = localDB["masculino"][i]["imagem"];
        nProduto.appendChild(nImg);

        pNome.innerText = localDB["masculino"][i]["nome"];
        nProduto.appendChild(pNome);

        pCategoria.innerText = localDB["masculino"][i]["categoria"];
        nProduto.appendChild(pCategoria);

        pDescricao.innerText = localDB["masculino"][i]["descrição"];
        nProduto.appendChild(pDescricao);

        produtosCadastrados.appendChild(nProduto);
    }

    for(let i = 0; i < localDB["feminino"].length; i++){
        
        let pNome = document.createElement('p');
        let pDescricao = document.createElement('p');
        let pCategoria = document.createElement('p');
        let nImg = document.createElement('img');
        let nProduto = document.createElement('div');

        nImg.src = localDB["feminino"][i]["imagem"];
        nProduto.appendChild(nImg);

        pNome.innerText = localDB["feminino"][i]["nome"];
        nProduto.appendChild(pNome);

        pCategoria.innerText = localDB["feminino"][i]["categoria"];
        nProduto.appendChild(pCategoria);

        pDescricao.innerText = localDB["feminino"][i]["descrição"];
        nProduto.appendChild(pDescricao);

        produtosCadastrados.appendChild(nProduto);
    }
    
};