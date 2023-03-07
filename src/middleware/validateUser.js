const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  return next();
};

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  return next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
};