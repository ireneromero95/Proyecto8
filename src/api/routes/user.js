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
//Aqui esta el intento del deleteSelf, pero no consigo que funcione, ¿seria así o me lo he inventado mucho?
usersRoutes.delete('/:id', [isAdmin] || [isSelf], deleteUser);
usersRoutes.put('/:id', [isAdmin], updateUser);

module.exports = usersRoutes;
