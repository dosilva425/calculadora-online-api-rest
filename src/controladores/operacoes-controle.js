const soma = (req, res) => {
    const { num1, num2 } = req.query;

    const operacaoSoma = Number(num1) + Number(num2);

    return res.send(`${operacaoSoma}`);
}

const subtracao = (req, res) => {
    const { num1, num2 } = req.query;

    const operacaoSubtracao = Number(num1) - Number(num2);

    return res.send(`${operacaoSubtracao}`);
}

const multiplicacao = (req, res) => {
    const { num1, num2 } = req.query;

    const operacaoMultiplicacao = Number(num1) * Number(num2);

    return res.send(`${operacaoMultiplicacao}`);
}

const divisao = (req, res) => {
    const { num1, num2 } = req.query;

    if (Number(num2) === 0) {
        return res.status(400).send('Erro: Divisão por zero. Informe um número divisor que seja diferente de 0!');
    }

    const operacaoDivisao = Number(num1) / Number(num2);

    return res.send(`${operacaoDivisao}`);
}

const potenciacao = (req, res) => {
    const { num1, num2 } = req.query;

    const operacaoPotenciacao = Number(num1) ** Number(num2);

    return res.send(`${operacaoPotenciacao}`);
}

const porcentagem = (req, res) => {
    const { num1, num2 } = req.query;

    const operacaoPorcentagem = (Number(num1) / 100) * Number(num2);

    return res.send(`${operacaoPorcentagem}`);
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao,
    potenciacao,
    porcentagem
}