const error = require('./error');
const { AppError } = require('@appyhigh/express-error-handler');

const testing = async (request, response) => {
  console.log('testing controller has started!');

  /*
  1. uncomment both test cases one by one and check the response.
  */

  //test case 1
  //let options = {}//you can pass any data related to known error like 3rd party response error. it is optional.
  // throw new AppError(error.knownError,options);

  //test case 2
  // console.log('test ', test);// unknown error handling

  response.status(200).send('Ok');
};

module.exports = {
  testing
}