const { verifyToken } = require('../auth/authFunctions');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload = verifyToken(authorization);
    req.data = payload.data;
    next();
  } catch (error) {
    res.status(500).json({
      message: 'Error',
    });
  }
};

module.exports = validateToken;