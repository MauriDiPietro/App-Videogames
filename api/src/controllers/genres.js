const { Genre} = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;
const ModelCrud = require('./index');

class GenreModel extends ModelCrud {
    constructor(model) {
        super(model);
    }

getGenre = async (req, res) => {
    try{
        const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        genresApi.data.results.forEach((gen)=> {
            this.model.findOrCreate({where: {name: gen.name}})
    })
    const myGenres = await this.model.findAll() 
    
    res.json(myGenres)
}catch (err) {
    res.status(400).send('no se encuentra el género')
}
}
// getGenre = (req, res, next)=>{
//     axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
//     .then((results)=>{
//         res.send(results.data)
//     })
//     .catch((error)=>next(error))
    



}



const genresController = new GenreModel(Genre);

module.exports = genresController;
