const ApiError = require('../error/ApiError');

module.exports = function (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({
    message:
      "На сервере произошла ошибка, в результате которой он не может успешно обработать запрос",
  });
};
