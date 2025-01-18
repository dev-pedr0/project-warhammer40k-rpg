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

//Deletar personagem
async function deleteCharacter(characterId) {
    if (confirm('Tem certeza que deseja deletar este personagem?')) {
        try {
            // Envia requisição DELETE para o servidor
            const response = await fetch(`/character/${characterId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);

                // Remove o personagem da página
                const characterElement = document.querySelector(`[onclick="deleteCharacter('${characterId}')"]`).parentElement.parentElement;
                characterElement.remove();
            } else {
                alert(data.message || 'Erro ao deletar personagem.');
            }
        } catch (err) {
            console.error('Erro ao deletar personagem:', err);
            alert('Ocorreu um erro ao tentar deletar o personagem.');
        }
    }
}