const { HttpException } = require('./HttpException.js');

class NotAuthorizedError extends HttpException {
  constructor() {
    const statusCode = 401;
    const message = 'Unauthorized access!';

    super(statusCode, message);
  }
}

module.exports = NotAuthorizedError;
