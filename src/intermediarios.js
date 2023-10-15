const informarNumeros = (req, res, next) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).send('Informe todos os números para a realização da operação!');
    }
    next();
}

module.exports = {
    informarNumeros,
}