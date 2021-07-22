const { Platform} = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;
const ModelCrud = require('./index');

class PlatformsModel extends ModelCrud {
    constructor(model) {
        super(model);
    }


getPlatforms = async (req, res) => {
    let platforms = [];
    try{
        let platformsApi = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        platformsApi.data.results.forEach(p=> {
            platforms.push(p.name)
            this.model.findOrCreate({where: {name: p.name}})
    })
    res.send(platforms);
}catch (err) {
    res.status(400).send('platform is no exist')
}
}
}

const platformsController = new PlatformsModel(Platform);

module.exports = platformsController;