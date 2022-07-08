class AppError extends Error {
  constructor(customError, options = {}) {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);

    // add custom properties to error object
    this.options = options;//any type of other info data
    this.httpCode = customError.httpCode; // http status code    
    this.errorDescription = customError.errorDescription; //Message describing the error for developer
    this.type = customError.type; //error type or error origin
    this.errorUserTitle = customError.errorUserTitle; //error title for user
    this.errorUserMsg = customError.errorUserMsg; //error msg for user
  }
}

module.exports = AppError;