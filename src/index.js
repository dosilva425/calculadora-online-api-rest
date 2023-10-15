const express = require('express');
const rotas = require('./rotas');

const app = express();

// app.use(express.json()); // sem express por enquanto
app.use(rotas);

app.listen(3000);