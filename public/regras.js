//Controle das páginas de regras
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

//Controle das opções do usuário
const usuario =document.querySelector(".usuario");
const usuarioOpcoes = document.querySelector(".usuario-opcoes");

usuario.addEventListener("click", abrirOpcoesUsuario);
console.log(usuarioOpcoes.style);

document.addEventListener("click", (evento) => {
    if (!usuarioOpcoes.contains(evento.target) && !usuario.contains(evento.target)) {
        usuarioOpcoes.classList.remove("toogle-block");
        console.log("oi");
    }
});

function abrirOpcoesUsuario() {
    usuarioOpcoes.classList.add("toogle-block");
}