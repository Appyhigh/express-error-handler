const express = require('express')
const { expressErrorHandler } = require('@appyhigh/express-error-handler');
const app = express()
const port = 3322



// import all routes
app.use(`/`, require('./routes/testing'));

//express error handler configuration
app.use(expressErrorHandler({
  environment: process.env.ENV === 'development' ? 'development' : 'production',
  errorLogs: process.env.ENV === 'development' ? true : false,
  trace: process.env.ENV === 'development' ? true : false,
  errorDescription: process.env.ENV === 'development' ? true : false,
  errorOrigin: process.env.ENV === 'development' ? true : false,
  dbUrl: 'mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true',
  dbName: 'test-1',
  appName: 'testing-1'
}));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})