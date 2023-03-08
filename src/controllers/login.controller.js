const { createToken } = require('../auth/authFunctions');
const { UserService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const valid = await UserService.login(email, password);

  if (!valid) {
    return res.status(400).json({
      message: 'Invalid fields',
    });
  }

  const token = createToken(valid);
  console.log({ token });

  res.status(200).json({ token });
};

module.exports = {
  login,
};