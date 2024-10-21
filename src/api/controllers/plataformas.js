const { deleteFile } = require('../../utils/deleteFile');
const Plataforma = require('../models/plataformas');

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataforma(req.body);
    if (req.file) {
      newPlataforma.imagen = req.file.path;
    }
    const plataformaSaved = await newPlataforma.save();
    return res.status(201).json(plataformaSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataforma.find();
    return res.status(200).json(plataformas);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updatePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPlataforma = new Plataforma(req.body);
    newPlataforma._id = id;

    if (req.file) {
      newPlataforma.imagen = req.file.path;
      const oldPlataforma = await Plataforma.findById(id);
      deleteFile(oldPlataforma.imagen);
    }
    const plataformaUpdated = await Plataforma.findByIdAndUpdate(
      id,
      newPlataforma,
      {
        new: true
      }
    );
    return res.status(200).json(plataformaUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const deletePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id);
    deleteFile(plataformaDeleted.imagen);
    return res.status(200).json(plataformaDeleted);
  } catch (error) {
    return res.status(400).json(error);
  }
};

module.exports = {
  getPlataformas,
  postPlataforma,
  deletePlataforma,
  updatePlataforma
};
