const { isAdmin, isAuth } = require('../../middlewares/auth');
const { uploadSong } = require('../../middlewares/file');
// const upload = require('../../middlewares/file');

const {
  getCanciones,
  postCancion,
  deleteCancion,
  updateCancion,
  getCancionesAdmin
} = require('../controllers/canciones');

const cancionesRoutes = require('express').Router();

cancionesRoutes.get('/', getCanciones);
cancionesRoutes.get('/not-verified', [isAdmin], getCancionesAdmin);
cancionesRoutes.post('/', [isAuth], uploadSong.single('imagen'), postCancion);
//imagen coge el nombre directamente del modelo de cancion
cancionesRoutes.delete('/:id', [isAdmin], deleteCancion);
cancionesRoutes.put(
  '/:id',
  [isAdmin],
  uploadSong.single('imagen'),
  updateCancion
);
module.exports = cancionesRoutes;

///Me falta que los usuarios se eliminen a si mismos
//y que tengan una categoria favorita (o cancion si me veo muy mal)
