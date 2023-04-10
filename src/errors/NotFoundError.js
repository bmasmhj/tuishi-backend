const { HttpException } = require('./HttpException.js');

function NotFoundError() {
  const statusCode = 404;
  const message = 'Not Found!';
  HttpException.call(this, statusCode, message);
}

NotFoundError.prototype = Object.create(HttpException.prototype);

module.exports = NotFoundError;
