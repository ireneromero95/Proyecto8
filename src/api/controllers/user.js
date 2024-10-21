const { generateSign } = require('../../config/jwt');
const User = require('../models/user');
const bcrypt = require('bcrypt');

//postUser - Create
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      plataformaUsada: req.body.plataformaUsada,
      rol: 'user'
    });

    //Vamos a evitar que el nombre de usuario sea repetido
    const userDuplicated = await User.findOne({ userName: req.body.userName });
    if (userDuplicated) {
      return res.status(400).json('Ese nombre de usuario ya existe');
    }

    //Ahora hay que guardarlo en la base de datos, eso lleva tiempo
    //Aquí se hace el await
    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName });

    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateSign(user._id);
        return res.status(200).json({ user, token });
      } else {
        return res
          .status(400)
          .json('El usuario o la contraseña son incorrectos');
      }
    } else {
      return res.status(400).json('El usuario o la contraseña son incorrectos');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    console.log('Al menos llegar está llegando');
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json({ mensaje: 'Usuario eliminado', userDeleted });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteSelf = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json({ mensaje: 'Usuario eliminado', userDeleted });
  } catch (error) {
    return res.status(400).json(error);
  }
};

//getuser
const getUser = async (req, res, next) => {
  try {
    //Aqui no se pone el nombre de la coleccion sino del atributo del objeto
    const users = await User.find().populate('plataformaUsada');
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newUserRol = new User({ rol: req.body.rol });
    newUserRol._id = id;
    const userUpdated = await User.findByIdAndUpdate(id, newUserRol, {
      new: true
    });
    console.log('Maomeno');
    return res.status(200).json(userUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  register,
  login,
  deleteUser,
  getUser,
  updateUser,
  deleteSelf
};
