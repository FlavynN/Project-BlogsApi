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

const getUsers = async (_req, res) => {
  const users = await UserService.getUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserService.getUserById(id);

    const { password: _, ...userWithoutPassword } = users.dataValues;
    return res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(404).json({
      message: 'User does not exist',
    });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};