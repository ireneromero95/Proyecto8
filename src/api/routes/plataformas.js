const { isAdmin } = require('../../middlewares/auth');
const { uploadPlatform } = require('../../middlewares/file');
const {
  getPlataformas,
  postPlataforma,
  deletePlataforma,
  updatePlataforma
} = require('../controllers/plataformas');

const plataformasRoutes = require('express').Router();

plataformasRoutes.get('/', getPlataformas);
plataformasRoutes.post(
  '/',
  [isAdmin],
  uploadPlatform.single('imagen'),
  postPlataforma
);
plataformasRoutes.delete('/:id', [isAdmin], deletePlataforma);
plataformasRoutes.put(
  '/:id',
  [isAdmin],
  uploadPlatform.single('imagen'),
  updatePlataforma
);
module.exports = plataformasRoutes;
