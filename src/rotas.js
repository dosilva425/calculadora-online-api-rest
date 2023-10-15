const express = require('express');
const { informarNumeros } = require('./intermediarios');
const operacoesControle = require('./controladores/operacoes-controle');

const rotas = express();

rotas.get('/somar', informarNumeros, operacoesControle.soma);
rotas.get('/subtrair', informarNumeros, operacoesControle.subtracao);
rotas.get('/multiplicar', informarNumeros, operacoesControle.multiplicacao);
rotas.get('/dividir', informarNumeros, operacoesControle.divisao);

module.exports = rotas;

