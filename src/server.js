const app = require('./api')
const expressSwagger = require('express-swagger-generator')(app)

const options = {
  swaggerDefinition: {
    info: {
      description: 'API documentation',
      title: 'Carpaccio',
      version: '1.0.0'
    },
    host: 'localhost:3002',
    basePath: '/v1',
    produces: [
      'application/json',
      'application/xml'
    ],
    schemes: ['http', 'https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: ''
      }
    }
  },
  basedir: __dirname, // app absolute path
  files: ['../doc/entities.js', '../doc/routes.js'] // Path to the API handle folder
}

expressSwagger(options)
app.listen(3002, () => { console.log('Waiting for requests....') })
