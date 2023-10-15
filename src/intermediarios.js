const informarNumeros = (req, res, next) => {
    const { num1, num2 } = req.query;

    if (!num1 || !num2) {
        return res.status(400).send('Informe todos os números para a realização da operação!');
    }
    next();
}
// Neste exercicio nao usa este controlador, pq query vem como string sempre...
// Se nao for converter pra number, nao precisa...
// const verificadorNumeros = (req, res, next) => {
//     const { num1, num2 } = req.query;

//     let tipoNum1 = typeof (num1);
//     let tipoNum2 = typeof (Num2);
//     if (num1 !== 'number' || num2 !== 'number') {
//         return res.status(400).send('Informe somente números para a realização da operação!');
//     }
//     next();
// }

module.exports = {
    informarNumeros,
    // verificadorNumeros
}