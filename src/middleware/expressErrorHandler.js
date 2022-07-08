/*
 * express-error-handler
 * Copyright 2022 Appyhigh.
 * Licensed under MIT License
 */

const { httpCode, httpMessage } = require('../constants/http');
const constants = require('../constants');
const serverError = require('../error/500');


/**
 * Express error handlers for JSON APIs in development and production environments.
 * @param {Object} [options]
 * @param {String} options.environment - server environment like development or production
 * @param {Boolean} options.errorLogs - if this is true then print all errors at console.
 * @return {VoidFunction}
 */
const expressErrorHandler = (options = {}) => {
  const environment = options.environment || constants.DEVELOPMENT;
  const errorLogs = options.errorLogs || false;


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

    if (err.message && err.message !== '') {

    }

    if (trace) {

    }

    //error logs
    if (errorLogs && environment === constants.DEVELOPMENT) {
      console.error(errorHandler);
    }

    //TODO: send error data to Appyware asynchronously

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