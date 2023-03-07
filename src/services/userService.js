const { User } = require('../models');

const getUsers = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });
  return newUser;
};

const verifyEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getUserById = (id) => User.findOne({ where: { id } });

module.exports = {
  login,
  createUser,
  verifyEmail,
  getUsers,
  getUserById,
};