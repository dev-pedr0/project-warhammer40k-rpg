function mostrarTexto () {
    let idBotao = event.target.getAttribute('id');
    console.log(idBotao);
    let textos = document.querySelectorAll(".descricao");
    textos[idBotao].style.display = "none";
    
}