const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRoutes = require('./videogames')        //ruta desde donde importo el archivo
// const videoGamesNameRoutes = require('./videogames')        
const videoGameRoutes = require('./videogame')
const genres = require('./genres')
const createVideoGameRoutes = require('./createvideogame')
const platforms = require('./platforms')
const addGenre = require('./createvideogame')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videoGamesRoutes)         //ruta desde donde accede el client
router.use('/videogame', videoGameRoutes)
router.use('/genres', genres)
router.use('/videogame', createVideoGameRoutes)
router.use('/platforms', platforms)
router.use('/:videogameId/genre/:genreId', addGenre)
// router.use('/videogames?name=', videoGamesNameRoutes)

module.exports = router;
