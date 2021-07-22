const { Router } = require('express');
const { Platform } = require('../db.js');
const platformsController = require('../controllers/platforms');
const router = Router();



router.get('/', platformsController.getPlatforms) //lista de platforms para creacion de videogame

module.exports = router;