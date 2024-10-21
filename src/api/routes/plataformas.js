const { isAdmin } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const {
  getPlataformas,
  postPlataforma,
  deletePlataforma,
  updatePlataforma
} = require('../controllers/plataformas');

const plataformasRoutes = require('express').Router();

plataformasRoutes.get('/', getPlataformas);
plataformasRoutes.post('/', [isAdmin], upload.single('imagen'), postPlataforma);
plataformasRoutes.delete('/:id', [isAdmin], deletePlataforma);
plataformasRoutes.put(
  '/:id',
  [isAdmin],
  upload.single('imagen'),
  updatePlataforma
);
module.exports = plataformasRoutes;
