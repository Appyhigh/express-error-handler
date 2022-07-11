//catch error for controler and pass to express global error handler
module.exports = (controller) => {
  return (request, response, next) => {
    controller(request, response, next).catch(next);
  };
};