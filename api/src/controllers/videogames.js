const { Videogame, Genre} = require('../db.js');
const ModelCrud = require('./index');
const axios = require('axios');
const { API_KEY } = process.env;



class VideogameModel extends ModelCrud {
    constructor(model) {
        super(model);
    }

    getVideoGames = async (req, res) => {
        const {name} = req.query
        try {
        if(name) {
        const apiGames = axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        
        let gamesRawg = (await apiGames).data
        let apiGames2 = gamesRawg.results.map((g)=>{
                let game = {
                    name: g.name,
                    id: g.id,
                    image: g.background_image,
                    genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                    description: g.description,
                    released: g.released,
                    rating: g.rating,
                    platforms: g.platforms[0].platform.name
                }
                return game
            })
            
            const myGames = await this.model.findAll({where: {name:name}}, {limit: 15}, 
                {include: {model: Genre, attributes: ['name']}});   
                res.json(apiGames2.concat(myGames))
            } 
             
            else
            
            {
            
        //}

    // getAllVideoGames = async (req, res)=> {
        let searchResults = [];
       
        const apiGames = (`https://api.rawg.io/api/games?page=1&page_size=40&key=${API_KEY}`);
        // for (let i = 0; i < results.length; i++) {       //5 veces porque trae de a 20 resultados
        let gamesRawg = (await axios.get(apiGames)).data
        let apiGames2 = gamesRawg.results.map((g)=>{
                let game = {
                    name: g.name,
                    id: g.id,
                    image: g.background_image,
                    genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                    description: g.description,
                    released: g.released,
                    rating: g.rating,
                    platforms: g.platforms[0].platform.name
                }
                return game
            })
            
            searchResults = searchResults.concat(apiGames2)
        // }
        /////LLAMADO 2///////
        const apiGames_2 = (`https://api.rawg.io/api/games?page=2&page_size=40&key=${API_KEY}`);
        // for (let i = 0; i < results.length; i++) {       //5 veces porque trae de a 20 resultados
        let gamesRawg_2 = (await axios.get(apiGames_2)).data
        let apiGames3 = gamesRawg_2.results.map((g)=>{
                let game = {
                    name: g.name,
                    id: g.id,
                    image: g.background_image,
                    genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                    description: g.description,
                    released: g.released,
                    rating: g.rating,
                    platforms: g.platforms[0].platform.name
                }
                return game
            })
            // apiGames = gamesRawg.next      //porque cuando hice el get, muestra 20 y tiene una prop next que pasa a la pag siguiente
            searchResults = searchResults.concat(apiGames3)

            ////////LLAMADO 3 //////////
            const apiGames_3 = (`https://api.rawg.io/api/games?page=5&page_size=20&key=${API_KEY}`);
        // for (let i = 0; i < results.length; i++) {       //5 veces porque trae de a 20 resultados
        let gamesRawg_3 = (await axios.get(apiGames_3)).data
        let apiGames4 = gamesRawg_3.results.map((g)=>{
                let game = {
                    name: g.name,
                    id: g.id,
                    image: g.background_image,
                    genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                    description: g.description,
                    released: g.released,
                    rating: g.rating,
                    platforms: g.platforms[0].platform.name
                }
                return game
            })
            // apiGames = gamesRawg.next      //porque cuando hice el get, muestra 20 y tiene una prop next que pasa a la pag siguiente
            searchResults = searchResults.concat(apiGames4)
            
        const {name, id, image, description, released, rating, platforms} = req.body;
        const myGames = await this.model.findAll({limit: 15}, 
            {include: {model: [Genre]},
                                    name,
                                    id,
                                    description, 
                                    released,
                                    rating, 
                                    platforms
                                            });
        searchResults = searchResults.concat(myGames);
         res.json(searchResults)
        }
   // }else {if (!searchResults){res.status(404).send('Error')}}
        
} catch (err) {
res.status(404).json('No se encuentra el videogame')
}
}

getVideoGamesApi = async (req, res) => {
    const {name} = req.query
    try {
   
    let searchResults = [];
   
    const apiGames = (`https://api.rawg.io/api/games?page=1&page_size=40&key=${API_KEY}`);
    // for (let i = 0; i < results.length; i++) {       //5 veces porque trae de a 20 resultados
    let gamesRawg = (await axios.get(apiGames)).data
    let apiGames2 = gamesRawg.results.map((g)=>{
            let game = {
                name: g.name,
                id: g.id,
                image: g.background_image,
                genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                description: g.description,
                released: g.released,
                rating: g.rating,
                platforms: g.platforms[0].platform.name
            }
            return game
        })
        // apiGames = gamesRawg.next      //porque cuando hice el get, muestra 20 y tiene una prop next que pasa a la pag siguiente
        searchResults = searchResults.concat(apiGames2)
    // }
    /////LLAMADO 2///////
    const apiGames_2 = (`https://api.rawg.io/api/games?page=2&page_size=40&key=${API_KEY}`);
    // for (let i = 0; i < results.length; i++) {       //5 veces porque trae de a 20 resultados
    let gamesRawg_2 = (await axios.get(apiGames_2)).data
    let apiGames3 = gamesRawg_2.results.map((g)=>{
            let game = {
                name: g.name,
                id: g.id,
                image: g.background_image,
                genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                description: g.description,
                released: g.released,
                rating: g.rating,
                platforms: g.platforms[0].platform.name
            }
            return game
        })
        // apiGames = gamesRawg.next      //porque cuando hice el get, muestra 20 y tiene una prop next que pasa a la pag siguiente
        searchResults = searchResults.concat(apiGames3)

        ////////LLAMADO 3 //////////
        const apiGames_3 = (`https://api.rawg.io/api/games?page=5&page_size=20&key=${API_KEY}`);
    // for (let i = 0; i < results.length; i++) {       //5 veces porque trae de a 20 resultados
    let gamesRawg_3 = (await axios.get(apiGames_3)).data
    let apiGames4 = gamesRawg_3.results.map((g)=>{
            let game = {
                name: g.name,
                id: g.id,
                image: g.background_image,
                genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
                description: g.description,
                released: g.released,
                rating: g.rating,
                platforms: g.platforms[0].platform.name
            }
            return game
        })
        // apiGames = gamesRawg.next      //porque cuando hice el get, muestra 20 y tiene una prop next que pasa a la pag siguiente
        searchResults = searchResults.concat(apiGames4)
        
    

res.send(searchResults)
} catch (err) {
res.status(404).json('No se encuentra el videogame')
}
}

getVideoGamesLocal = async (req, res) => {
    let searchResults = [];
    try {

        const {name, id, image, description, released, rating, platforms} = req.body;
        const myGames = await this.model.findAll({limit: 15}, 
            {include: {model: [Genre]},
                                    name,
                                    id,
                                    description, 
                                    released,
                                    rating, 
                                    platforms
                                            });
        searchResults = searchResults.concat(myGames);
         res.json(searchResults)
        // const myGamesLocal = await this.model.findAll( 
        //     {include: {model: Genre, attributes: ['name']}});   
        //     res.json(myGamesLocal)
        } catch (err) {
            res.status(404).json('No se encuentra el videogame')
            }}

}




    
    
            
        

// getAllVideoGames = (req, res)=> {
//             for (let i = 0; i < 5; i++) {
    // let gamesRawg = (apiGames).data
    // let apiGames2 = gamesRawg.results.map((g)=>{
    //         let game = {
    //             name: g.name,
    //             id: g.id,
    //             image: g.background_image,
    //             genres: g.genres.map((gen) => gen.name).filter(p => p != null).join(', '),
    //             description: g.description,
    //             released: g.released,
    //             rating: g.rating,
    //             platforms: g.platforms.map((pla) => pla.name).filter(p => p != null).join(', ')
    //         }
    //         return game
    //     })
//     const myGames = this.model.findAll({limit: 15}, {include: {model: [Genre]}});
//     const apiGames = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
// Promise.all([myGames, apiGames2])
//     .then((results)=>{
//         const [myGamesResults, apiGamesResults] = results;
//         const response = myGamesResults.concat(apiGamesResults);
//         res.send(response);
//     }) 
//     .catch((error)=>next(error));




const videogamesController = new VideogameModel(Videogame);

module.exports = videogamesController;