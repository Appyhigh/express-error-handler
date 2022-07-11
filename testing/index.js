const express = require('express')
const asyncExecute = require('./middleware/asyncExecute');
const { expressErrorHandler } = require('@appyhigh/express-error-handler');
const controller = require('./controller/testing');
const app = express()
const port = 3322

app.get('/', asyncExecute(controller.testing))

//express error handler configuration
app.use(expressErrorHandler({
  environment: process.env.ENV === 'development' ? 'development' : 'production',
  errorLogs: process.env.ENV === 'development' ? ture : false,
  trace: process.env.ENV === 'development' ? true : false,
  errorDescription: process.env.ENV === 'development' ? true : false,
  errorOrigin: process.env.ENV === 'development' ? true : false,
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})