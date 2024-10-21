const { isAdmin, isSelf } = require('../../middlewares/auth');
const {
  register,
  login,
  deleteUser,
  getUser,
  updateUser,
  deleteSelf
} = require('../controllers/user');

const usersRoutes = require('express').Router();

usersRoutes.get('/', getUser);
usersRoutes.post('/register', register);
usersRoutes.post('/login', login);
usersRoutes.delete('/:id', [isAdmin], deleteUser);
usersRoutes.put('/:id', [isAdmin], updateUser);
usersRoutes.delete('/a/:id', [isSelf], deleteSelf);

module.exports = usersRoutes;
