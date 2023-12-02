const joi = require('joi');

const schemaOperations = joi.object({
    x: joi.number().required().messages({
        'number.base': 'Enter a number',
        'any.required': 'Enter a number'
    }),
    y: joi.number().required().messages({
        'number.base': 'Enter a number',
        'any.required': 'Enter a number'
    })
});

const schemaDivisionOperation = joi.object({
    x: joi.number().required().messages({
        'number.base': 'Enter a number',
        'any.required': 'Enter a number'
    }),
    y: joi.number().invalid(0).required().messages({
        'number.base': 'Enter a number',
        'any.required': 'Enter a number',
        'any.invalid': 'Error: Division for zero. Enter a divisor number different from 0!'
    })
});

const schemaSquareRootOperation = joi.object({
    x: joi.number().positive().required().messages({
        'number.base': 'Enter a number',
        'any.required': 'Enter a number',
        'number.positive': 'Error: Square root of a negative number. Enter a positive number!'
    }),
});



module.exports = {
    schemaOperations,
    schemaDivisionOperation,
    schemaSquareRootOperation
};