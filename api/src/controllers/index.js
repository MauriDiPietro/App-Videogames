const {v4: uuidv4} = require('uuid');
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js');

const {Sequelize}= require('sequelize');


class ModelCrud {
    constructor(model) {
        this.model = model
    }
    //funciones:
    
    addVideoGame = async (req, res) => {
        const body = req.body;
        try {
        console.log('-------', req.body)
        const arr = req.body.genres 
        
        let videogame = await this.model.create({
            ...body,
            id: uuidv4(),
        })
       
        arr.map(async (elem)=>{
            console.log("elem", elem)
            let genre = await Genre.findOne({where:{name:elem}})
            console.log("genero: ------- ",genre.name)
            
         videogame.addGenre(genre)
            
           res.status(200).send('videogame created OK!')
           console.log(videogame)
       
        })
       
    } catch (err) {res.status(400).send('error')}
        
    }

    addGenreToVideogame = (req, res, next) => {
        const {videogameId, genreId} = req.params;
        this.model.findByPk(videogameId)
        .then(videogame =>{
            return videogame.addGenre(genreId)
        }).then(()=> res.send(200))
        .catch((error)=> next(error))
    }
       
    
    // getAllVideoGames = (req, res, next)=> {
    //     // const query = req.query;
    //     const myGames = this.model.findAll({limit: 15}, {include: [Genre]});
    //     const apiGames = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    //     Promise.all([myGames, apiGames])
    //         .then((results)=>{
    //             const [myGamesResults, apiGamesResults] = results;
    //             const response = myGamesResults.concat(apiGamesResults.data);
    //             res.send(response);
    //         }) 
    //         .catch((error)=>next(error));
    // }

    getVideoGameId = async (req, res, next) => {
        const {id} = req.params;
        
        if (id.includes('-')) { //si incluye '-' es un uuid
            const myGames = await this.model.findByPk(id,  {include: {model: Genre, attributes: ['name']}})
        const myGames2 = {
            id: myGames.id,
            name: myGames.name,
            description: myGames.description,
            image: myGames.image,
            released: myGames.released,
            rating: myGames.rating,
            platforms: myGames.platforms,
            genres: myGames.genres.map(g=> g.name).join(', ')
        }
        return res.json(myGames2)
    } else {
        const apiGames = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            const apiGames2 = {
                id: apiGames.data.id,
                name: apiGames.data.name,
                description: apiGames.data.description,
                image: apiGames.data.background_image,
                released: apiGames.data.released,
                rating: apiGames.data.rating,
                platforms: apiGames.data.platforms[0].platform.name,
                genres: apiGames.data.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
            }
            return res.json(apiGames2)
        
        }
        // Promise.all([apiGames, myGames])
        // .then((results)=>{
        //                 const [apiGamesResults, myGamesResults] = results;
        //                 const response = apiGamesResults.data.concat(myGamesResults);
        //                 res.send(response);
        //             }) 
        //             .catch((error)=>next(error));
    }
    
  

     
    
}


module.exports = ModelCrud;
