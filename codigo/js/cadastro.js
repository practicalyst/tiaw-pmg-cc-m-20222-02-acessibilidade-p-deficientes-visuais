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

const btnCadastro = document.querySelector('#btnCadastro');


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
    

    alert("Cadastro Realizado com Sucesso! - no Local Storage");
    

});
