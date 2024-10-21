const { deleteFile } = require('../../utils/deleteFile');
const Cancion = require('../models/canciones');

const postCancion = async (req, res, next) => {
  try {
    console.log('Pasa la utorizacion');
    const newCancion = new Cancion(req.body);

    if (req.file) {
      newCancion.imagen = req.file.path;
    }
    const cancionesaved = await newCancion.save();

    if (req.user.rol === 'admin') {
      newCancion.verified = true;
    } else {
      newCancion.verified = false;
    }
    return res.status(201).json(cancionesaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getCanciones = async (req, res, next) => {
  try {
    const canciones = await Cancion.find({ verified: true }).populate(
      'plataformas'
    );
    return res.status(200).json(canciones);
  } catch (error) {
    return res.status(400).json(error);
  }
};
const getCancionesAdmin = async (req, res, next) => {
  try {
    const canciones = await Cancion.find({ verified: false }).populate(
      'plataformas'
    );
    return res.status(200).json(canciones);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateCancion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCancion = new Cancion(req.body);
    newCancion._id = id;
    console.log(req.file);
    if (req.file) {
      newCancion.imagen = req.file.path;

      const oldCancion = await Cancion.findById(id);
      deleteFile(oldCancion.imagen);
    }
    const cancionUpdated = await Cancion.findByIdAndUpdate(id, newCancion, {
      new: true
    });
    return res.status(200).json(cancionUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deleteCancion = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cancionDeleted = await Cancion.findByIdAndDelete(id);
    deleteFile(cancionDeleted.imagen);
    return res.status(200).json(cancionDeleted);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getCanciones,
  postCancion,
  deleteCancion,
  updateCancion,
  getCancionesAdmin
};
