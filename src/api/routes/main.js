const cancionesRoutes = require('./canciones');
const plataformasRoutes = require('./plataformas');
const usersRoutes = require('./user');

const mainRouter = require('express').Router();

mainRouter.use('/plataformas', plataformasRoutes);
mainRouter.use('/canciones', cancionesRoutes);
mainRouter.use('/users', usersRoutes);

//De esta manera queda más limpio el index, en lugar de app.use se pone mainRouter.use
//y se exporta el mainRouter para el index

module.exports = mainRouter;
