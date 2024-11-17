require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configuração do Body-Parser para ler dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectar ao MongoDB usando o mongoose
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Servir arquivos estáticos da pasta src/pagina-login-cadastro (css, js)
app.use(express.static(path.join(__dirname, 'src', 'pagina-login-cadastro')));

// Servir imagens da pasta src/img
app.use('/img', express.static(path.join(__dirname, 'src', 'img')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'pagina-login-cadastro', 'index.html'));
});

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
