module.exports = (fn) => (req, res, next) => fn(req, res, next).catch((error) => {
  res.status(error.status || 500);
  if (error.headers) {
    res.set(error.headers);
  }
  res.json({
    message: error.message,
  });
});
