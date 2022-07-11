const { httpCode, AppError, httpMessage, expressErrorHandler } = require('../index');

console.log('httpCode ', httpCode.ACCEPTED);

const knownError = {
  errorDescription: 'Error description for developer.',
  type: 'error origin place or module name',
  errorUserTitle: 'Error title for user',
  errorUserMsg: httpMessage[httpCode.INTERNAL_SERVER_ERROR],
  httpCode: httpCode.INTERNAL_SERVER_ERROR
};

try {
  //do something....
  console.log('expressErrorHandler() ', expressErrorHandler());
}
catch (error) {
  console.log('error ', new AppError(knownError, {}))
}
console.log('error ', new AppError(knownError, {}))