const { Router } = require('express');
const { Genre } = require('../db.js');
const genresController = require('../controllers/genres');
const router = Router();


//GET /genres:
//Obtener todos los tipos de géneros de videojuegos posibles
//En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

router.get('/', genresController.getGenre)


module.exports = router;


