const express = require('express');
const validateRequestBody = require('./middlewares/validationRequestBody');
const { schemaOperations, schemaDivisionOperation, schemaSquareRootOperation } = require('./validations/schemaOperations');
const { addition, subtraction, multiplication, division, power, squareRoot, percentage } = require('./controllers/operations-control');



const routes = express();

routes.get('/addition', validateRequestBody(schemaOperations), addition);
routes.get('/subtraction', validateRequestBody(schemaOperations), subtraction);
routes.get('/multiplication', validateRequestBody(schemaOperations), multiplication);
routes.get('/division', validateRequestBody(schemaDivisionOperation), division);
routes.get('/power', validateRequestBody(schemaOperations), power);
routes.get('/squareRoot', validateRequestBody(schemaSquareRootOperation), squareRoot);
routes.get('/percentage', validateRequestBody(schemaOperations), percentage);

module.exports = routes;

