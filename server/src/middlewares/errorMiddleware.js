const errorMiddleHandle = (err, _req, _res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    statusCode,
    stack: err.stack,
  });
  next();
};
module.exports = errorMiddleHandle;
