const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  });
};

module.exports = { errorHandler };
