const { httpCode, httpMessage } = require('@appyhigh/express-error-handler');


//define each module known errors with proper description and message. this will help developer 
//to debug the issue.  
const knownError = {
  errorDescription: 'Error description for developer.',
  type: 'error origin place or module name',
  errorUserTitle: 'Error title for user',
  errorUserMsg: httpMessage[httpCode.INTERNAL_SERVER_ERROR],
  httpCode: httpCode.ACCEPTED
};


module.exports = {
  knownError
}