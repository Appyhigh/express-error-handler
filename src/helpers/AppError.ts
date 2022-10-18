class AppError extends Error {
  options: object;
  httpCode: number;
  errorDescription: string;
  type: string;
  errorUserTitle: string;
  errorUserMsg: string;
  constructor(
    customError: {
      httpCode: number;
      errorDescription: string;
      type: string;
      errorUserTitle: string;
      errorUserMsg: string;
    },
    options: object = {},
  ) {
    super();
    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);

    // add custom properties to error object
    this.options = options; //any type of other info data
    this.httpCode = customError.httpCode; // http status code
    this.errorDescription = customError.errorDescription; //Message describing the error for developer
    this.type = customError.type; //error type or error origin
    this.errorUserTitle = customError.errorUserTitle; //error title for user
    this.errorUserMsg = customError.errorUserMsg; //error msg for user
  }
}

export default AppError;
