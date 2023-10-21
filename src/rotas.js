const express = require('express');
const { informarNumeros } = require('./intermediarios');
const operacoesControle = require('./controladores/operacoes-controle');

const rotas = express();

rotas.get('/soma', informarNumeros, operacoesControle.soma);
rotas.get('/subtracao', informarNumeros, operacoesControle.subtracao);
rotas.get('/multiplicacao', informarNumeros, operacoesControle.multiplicacao);
rotas.get('/divisao', informarNumeros, operacoesControle.divisao);
rotas.get('/potencia', informarNumeros, operacoesControle.potenciacao);
rotas.get('/raiz_quadrada', informarNumeros, operacoesControle.raizQuadrada);
rotas.get('/porcentagem', informarNumeros, operacoesControle.porcentagem);

module.exports = rotas;

