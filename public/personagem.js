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