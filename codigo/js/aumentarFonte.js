
window.onload = function(){

    var aumentarFonte = document.querySelector("#bnt-fonte");

    aumentarFonte.addEventListener("click", (e) => {

        var elementBody = document.querySelector('body');
        var fontSize = 100;
        var increase = 10;
    
        var fontSize = fontSize + increase;
            elementBody.style.fontSize = fontSize + '%';
    });

}
