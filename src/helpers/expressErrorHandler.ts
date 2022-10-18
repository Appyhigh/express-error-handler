/*
 * express-error-handler
 * Copyright 2022 Appyhigh
 * Licensed under MIT License
 */

import save from '../dbConnection/mongodb';
import { ErrorRequestHandler } from 'express';
import DATABASES from '../utils/DATABASES';
import DEFAULT_ERROR from '../utils/DEFAULT_ERROR';
import defaultOptions, { Options } from '../utils/DEFAULT_OPTIONS';
import ENVIRONMENTS from '../utils/ENVIRONMENTS';

const expressErrorHandler = (options: Options) => {
  const allOptions: Options = {
    ...defaultOptions,
    ...options,
  };

  const errorHandler: ErrorRequestHandler = (error, request, response) => {
    let errorObj;
    let httpStatusCode;

    if (Object.prototype.hasOwnProperty.call(error, 'httpCode')) {
      errorObj = {
        stack: error.stack,
        errorDescription: error.errorDescription,
        type: error.type,
        errorUserTitle: error.errorUserTitle,
        errorUserMsg: error.errorUserMsg,
      };
      httpStatusCode = error.httpCode;
    } else {
      errorObj = {
        stack: error.stack,
        errorDescription: DEFAULT_ERROR.errorDescription,
        type: DEFAULT_ERROR.type,
        errorUserTitle: DEFAULT_ERROR.errorUserTitle,
        errorUserMsg: DEFAULT_ERROR.errorUserMsg,
      };
      httpStatusCode = DEFAULT_ERROR.httpCode;
    }

    if (allOptions.database === DATABASES.MONGODB) {
      //save error data to DB asynchronously
      if (allOptions.mongoURL && allOptions.mongoURL.length > 0) {
        const saveErrorObj = {
          error: {
            ...errorObj,
          },
          otherInfo: error.options,
          errorTrace: error.stack,
          statusCode: httpStatusCode,
          originalUrl: `${request.hostname}${request.originalUrl}`,
          protocol: request.protocol,
          methods: request.method,
          appName: allOptions.appName,
          environment: allOptions.environment,
        };
        delete saveErrorObj.error.stack;
        save(allOptions.mongoURL, allOptions.dbName, saveErrorObj);
      }
    }

    if (!allOptions.errorDescription) {
      delete errorObj.errorDescription;
    }

    if (!allOptions.trace) {
      delete errorObj.stack;
    }

    if (!allOptions.errorOrigin) {
      delete errorObj.type;
    }

    //error logs
    if (allOptions.errorLogs && allOptions.environment === ENVIRONMENTS.DEV) {
      console.error(errorObj);
    }

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
      error: errorObj,
    });
  };

  return errorHandler;
};

export default expressErrorHandler;
