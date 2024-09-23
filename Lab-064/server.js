const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota sobre
app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'error.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});