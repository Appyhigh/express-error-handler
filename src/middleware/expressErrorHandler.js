/*
 * express-error-handler
 * Copyright 2022 Appyhigh
 * Licensed under MIT License
 */


const constants = require('../constants');
const serverError = require('../error/500');


/**
 * Express error handlers for JSON APIs in development and production environments.
 * @param {Object} [options]
 * @param {String} options.environment - server environment like development or production
 * @param {Boolean} options.errorLogs - if this is true then print all errors at console
 * @param {Boolean} options.trace - if this is true then send error trace in response
 * @param {Boolean} options.errorDescription - if this is true then send error description in response
 * @param {Boolean} options.errorOrigin - if this is true then send error origin in response
 * @return {VoidFunction}
 */
const expressErrorHandler = (options = {}) => {

  const environment = options.hasOwnProperty('environment') ? options.environment : constants.DEVELOPMENT;
  const errorLogs = options.hasOwnProperty('errorLogs') ? options.errorLogs : false;
  const trace = options.hasOwnProperty('trace') ? options.trace : true;
  const errorDescription = options.hasOwnProperty('errorDescription') ? options.errorDescription : true;
  const errorOrigin = options.hasOwnProperty('errorOrigin') ? options.errorOrigin : true;

  // eslint-disable-next-line no-unused-vars
  return (error, request, response, next) => {

    let errorObj;
    let httpStatusCode;

    if (error.hasOwnProperty('httpCode')) {//for known errors
      errorObj = {
        stack: error.stack,
        errorDescription: error.errorDescription,
        type: error.type,
        errorUserTitle: error.errorUserTitle,
        errorUserMsg: error.errorUserMsg
      };
      httpStatusCode = error.httpCode;
    }
    else {//for unknown errors
      errorObj = {
        stack: error.stack,
        errorDescription: serverError.errorDescription, //Message describing the error
        type: serverError.type, //error type or error origin
        errorUserTitle: serverError.errorUserTitle, //error title for user
        errorUserMsg: serverError.errorUserMsg //error msg for user
      };
      httpStatusCode = serverError.httpCode;
    }

    if (!errorDescription) {
      delete errorObj.errorDescription;
    }

    if (!trace) {
      delete errorObj.stack;
    }

    if (!errorOrigin) {
      delete errorObj.type;
    }

    //error logs
    if (errorLogs && environment === constants.DEVELOPMENT) {
      console.error(errorObj);
    }

    //TODO: send error data to Appyware asynchronously
    console.log('send error data to Appyware asynchronously')

    // Deleting any kind of password/code/token received from the client before logging the request body
    if (request.body) {
      delete request.body.password;
      delete request.body.code;
      delete request.body.token;
      delete request.body.authToken;
    }
    delete request.headers.authorization;

    return response.status(httpStatusCode).json({
      statusCode: httpStatusCode,
      error: errorObj
    });
  };
};


module.exports = expressErrorHandler;