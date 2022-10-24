const inputFile = document.querySelector("#imagemProduto__input");
const pictureImage = document.querySelector(".exibeImagem");
const pictureImageTxt = "Adicione uma Imagem para o Produto";

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

