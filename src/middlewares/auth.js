//Los middleware van en medio de la ruta antes de la funcion final
//Para probar en el insomnia las auth hay que meter el token en la auth
//Seleccionando la opcion de Bearer Token

const User = require('../api/models/user');
const { verifyJwt } = require('../config/jwt');

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json('No estás registrado');
    }
    //Importante el paso debajo de esto porque si no me da el token con el Bearer espacio.
    const parsedToken = token.replace('Bearer ', '');
    //verifyJwt me pasa un objeto del que hago destructuring y me quedo solo el id
    const { id } = verifyJwt(parsedToken);
    const user = await User.findById(id);

    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(400).json('No estás autorizado para eso');
    }
    //Importante el paso debajo de esto porque si no me da el token con el Bearer espacio.
    const parsedToken = token.replace('Bearer ', '');
    //verifyJwt me pasa un objeto del que hago destructuring y me quedo solo el id
    const { id } = verifyJwt(parsedToken);
    const user = await User.findById(id);

    if (user.rol === 'admin') {
      //Importante null pa proteger al usuario y estas tres lineas son la que
      //indican pa tirar palante, o sea que las podemos poner con condicional
      //como que el user tenga un name concreto
      user.password = null;
      req.user = user;
      //Importante el next para que avance al siguiente paso, el delete
      next();
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

const isSelf = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json('No estás loggeado');
    }
    //Importante el paso debajo de esto porque si no me da el token con el Bearer espacio.
    const parsedToken = token.replace('Bearer ', '');
    //verifyJwt me pasa un objeto del que hago destructuring y me quedo solo el id
    const { id } = verifyJwt(parsedToken);

    let idEliminar = req.params.id;
    const user = await User.findById(id);

    if (idEliminar === id) {
      //Importante null pa proteger al usuario y estas tres lineas son la que
      //indican pa tirar palante, o sea que las podemos poner con condicional
      //como que el user tenga un name concreto
      user.password = null;
      req.user = user;

      console.log(user);
      //Importante el next para que avance al siguiente paso, el delete
      next();
    } else {
      return res.status(400).json('No eres tú');
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = { isAuth, isAdmin, isSelf };
