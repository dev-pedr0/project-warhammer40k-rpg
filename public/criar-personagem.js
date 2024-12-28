document.getElementById('characterForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Cria o FormData do formulário
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Formata o objeto stats corretamente
    const stats = {
        strength: parseInt(data['stats[strength]'], 10),
        dexterity: parseInt(data['stats[dexterity]'], 10),
        intelligence: parseInt(data['stats[intelligence]'], 10),
    };

    // Remove os campos de stats do data e insere o objeto stats corretamente
    delete data['stats[strength]'];
    delete data['stats[dexterity]'];
    delete data['stats[intelligence]'];
    data.stats = stats;

    try {
        // Envia a requisição para o servidor
        const response = await fetch('/character', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Caso precise, inclua o token no cabeçalho de autenticação:
                // 'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        alert(result.message); // Exibe a mensagem retornada pelo servidor

    } catch (err) {
        console.error(err);
        alert('Erro ao salvar personagem!');
    }
});