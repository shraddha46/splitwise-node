const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Splitwise APIs',
        version: '1.0.0',
        description: 'Splitwise API documentation',
      },
    },
    apis: ['./Routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs,
};