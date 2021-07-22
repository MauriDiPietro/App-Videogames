const { Router } = require('express');
const { Videogame, Genre } = require('../db.js');
const bodyParser = require('body-parser');
const axios = require('axios');
const { API_KEY } = process.env;
const videogamesController = require('../controllers/videogames');

// router.use(bodyParser.json())

const router = Router();


router.get('/', videogamesController.getVideoGames)
router.get('/local', videogamesController.getVideoGamesLocal)
router.get('/api', videogamesController.getVideoGamesApi)


module.exports = router;