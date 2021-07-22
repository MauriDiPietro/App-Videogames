const { Router } = require('express');
const { Videogame, Genre } = require('../db.js');
const videogamesController = require('../controllers/videogames');

const router = Router();

// GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados



router.get('/:id', videogamesController.getVideoGameId)


module.exports = router;



              

