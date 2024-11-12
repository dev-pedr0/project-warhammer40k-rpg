function mostrarTexto () {
    let idBotao = event.target.getAttribute('id');
    console.log(idBotao);
    let textos = document.querySelectorAll(".descricao");
    textos.forEach((elemento) => {
        elemento.style.display = "none";
    });
    textos[idBotao].style.display = "block";
    let rodape = document.querySelector(".rodape");
    rodape.style.position = "relative";   
}