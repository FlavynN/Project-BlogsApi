const { UserService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const verifyDuplicate = await UserService.verifyEmail(email);
  if (verifyDuplicate) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const users = await UserService.createUser(displayName, email, password, image);

  const { password: _, ...userWithoutPassword } = users.dataValues;
  const token = createToken(userWithoutPassword);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};