module.exports = async (req, res, next) => {
  try {
    await next();
  } catch (e) {
    res.status(500).json({ error: 'Server error!' });
  }
};
