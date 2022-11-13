let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function likeButton(x){
  // Chamadas feitas no HTML - Prototipo
  console.log(x);
  if (x.className == 'fa-regular fa-heart'){
    x.className = 'fa-solid fa-heart';
  }
  
  else {
    x.className = 'fa-regular fa-heart';
  }
  
  
}

function criarBotaoCurtir(x){
  let like = document.createElement('div');
  like.className = "curtir";

  let coracao = document.createElement('i');
  coracao.className = 'fa-regular fa-heart';
  
  // Espera uma função e envia o evento para essa função - nao recebe argumentos
  // coracao.onclick = likeButton;
  
  coracao.addEventListener("click", () =>{
    if (coracao.className == 'fa-regular fa-heart'){
      coracao.className = 'fa-solid fa-heart';
    }
    else {
      coracao.className = 'fa-regular fa-heart';
    }
  });
  

  like.appendChild(coracao);
  x.appendChild(like);

}

/* essa função será responsável por pegar o json da variavel produtos e exibir
de forma dinamica */

(function (){
  let secaoProdutos = document.getElementsByClassName('exibeProdutos')[0];

  console.log(localDB);

  let i;
  for(i = 0; i < localDB['masculino'].length; i++){

    let newCard = document.createElement('div');
    newCard.className = 'card';

    let title = document.createElement('p');
    let img = document.createElement('img');
    let descricao = document.createElement('p');

    title.innerHTML = localDB['masculino'][i]['nome'];
    descricao.innerHTML = localDB['masculino'][i]['descrição'];
    img.src = localDB['masculino'][i]['imagem'];

    newCard.appendChild(img);
    newCard.appendChild(title);
    newCard.appendChild(descricao);
    criarBotaoCurtir(newCard);


    secaoProdutos.appendChild(newCard);

    console.log("carregado", localDB['masculino'][i]['nome']);
    console.log("carregado", localDB['masculino'][i]['descrição']);
    console.log("carregado", "imagem");
  }

  secaoProdutos = document.getElementsByClassName('exibeProdutos')[1];

  for(i = 0; i < localDB['feminino'].length; i++){

    let newCard = document.createElement('div');
    newCard.className = 'card';

    let title = document.createElement('p');
    let img = document.createElement('img');
    let descricao = document.createElement('p');

    title.innerHTML = localDB['feminino'][i]['nome'];
    descricao.innerHTML = localDB['feminino'][i]['descrição'];
    img.src = localDB['feminino'][i]['imagem'];

    newCard.appendChild(img);
    newCard.appendChild(title);
    newCard.appendChild(descricao);
    criarBotaoCurtir(newCard);

    secaoProdutos.appendChild(newCard);

    console.log("carregado", localDB['feminino'][i]['nome']);
    console.log("carregado", localDB['feminino'][i]['descrição']);
    console.log("carregado", "imagem");
  }

})();





