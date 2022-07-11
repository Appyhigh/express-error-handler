const { httpCode, httpMessage } = require('../constants/http');

module.exports = {
  errorDescription: 'Internal server error',
  type: 'globalError',
  errorUserTitle: '',
  errorUserMsg: httpMessage[httpCode.INTERNAL_SERVER_ERROR],
  httpCode: httpCode.INTERNAL_SERVER_ERROR
}