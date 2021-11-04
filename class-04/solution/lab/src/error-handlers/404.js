'use strict';

function handle404(req, res, next) {

  const errorObject = {
    status: 404,
    message: 'Sorry, we could not find what you were looking for'
  }

  res.status(404).json(errorObject);
}

module.exports = handle404;
