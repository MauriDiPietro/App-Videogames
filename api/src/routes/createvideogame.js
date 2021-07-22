const { Router } = require('express');

const { Videogame, Genre } = require('../db.js');
const videogamesController = require('../controllers/videogames');
const router = Router();



// POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos

router.post('/', videogamesController.addVideoGame)
router.post('/:videogameId/genre/:genreId', videogamesController.addGenreToVideogame)  //tabla intermedia


module.exports = router;
