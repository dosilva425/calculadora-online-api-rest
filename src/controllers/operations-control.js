const addition = (req, res) => {
    const { x, y } = req.body;

    const additionOperation = x + y;

    return res.status(200).json(additionOperation);
}

const subtraction = (req, res) => {
    const { x, y } = req.body;

    const subtractionOperation = x - y;

    return res.status(200).json(subtractionOperation);
}

const multiplication = (req, res) => {
    const { x, y } = req.body;

    const multiplicationOperation = x * y;

    return res.status(200).json(multiplicationOperation);
}

const division = (req, res) => {
    const { x, y } = req.body;

    const divisionOperation = x / y;

    return res.status(200).json(divisionOperation);
}

const power = (req, res) => {
    const { x, y } = req.body;

    const powerOperation = x ** y;

    return res.status(200).json(powerOperation);
}

const squareRoot = (req, res) => {
    const { x } = req.body;

    const squareRootOperation = Math.sqrt(x);

    return res.status(200).json(squareRootOperation);
}

const percentage = (req, res) => {
    const { x, y } = req.body;

    const percentageOperation = (x / 100) * y;

    return res.status(200).json(percentageOperation);
}

module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    power,
    squareRoot,
    percentage
}