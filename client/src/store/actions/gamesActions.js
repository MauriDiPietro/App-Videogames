import axios from 'axios';


export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const SEARCH_VIDEOGAMES_NAME = 'SEARCH_VIDEOGAMES_NAME';
export const SEARCH_VIDEOGAME_ID = 'SEARCH_VIDEOGAME_ID';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const SORT_BY_ALPHABET = 'SORT_BY_ALPHABET';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';
export const FILTER_BY_CREATOR = 'FILTER_BY_CREATOR';
export const GET_VIDEOGAMES_LOCAL = 'GET_VIDEOGAMES_LOCAL';
export const SORT_BY_RATING = 'SORT_BY_RATING';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const ADD_GENRE = 'ADD_GENRE';
export const GET_VIDEOGAMES_API = 'GET_VIDEOGAMES_API';

export function getVideogamesApi() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogames/api`)
        .then(response=>response.json())
        .then(json => {
           dispatch({
                type: GET_VIDEOGAMES_API,
                payload: json
            })
           
        })
    }
}

export function getVideogames() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogames`)
        .then(response=>response.json())
        .then(json => {
           dispatch({
                type: GET_VIDEOGAMES,
                payload: json
            })
           
        })
    }
}

export function getVideogamesLocal() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogames/local`)
        .then(response=>response.json())
        .then(json => {
           dispatch({
                type: GET_VIDEOGAMES_LOCAL,
                payload: json
            })
           
        })
    }
}

export function getGenres() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/genres`)
          .then(response=>response.json())
        .then(json=>{
            dispatch({
                type: GET_GENRES,
                payload: json
            })
           
        })
    }
}

export function getPlatforms() {
    return function(dispatch) {
        return fetch(`http://localhost:3001/platforms`)
          .then(response=>response.json())
        .then(json=>{
            dispatch({
                type: GET_PLATFORMS,
                payload: json
            })
           
        })
    }
}

export function getVideogamesName(name) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogames?name=${name}`)
        .then(response=>response.json())
        .then(json => {
            dispatch({
                type: SEARCH_VIDEOGAMES_NAME,
                payload: json
            })
           
        })
    }
}

export function getGameforId(id) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/videogame/${id}`)
        .then(response=>response.json())          //cuando devuelve el json 
            .then(json=>{
                dispatch({          //crea la acción
                type: SEARCH_VIDEOGAME_ID,
                payload: json
            })
        })
    }
}


export function createVideogame(game) {
    return function(dispatch) {
        return axios.post(`http://localhost:3001/videogame`, {
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(game)
        })
        .then((response)=> {         
            
                dispatch({          
                type: CREATE_VIDEOGAME,
                payload: response.data,
            })
            
        })
    }
}


export function addGenre(genre) {
    return function(dispatch) {
        return axios.post(`http://localhost:3001/videogame/:videogameId/genre/:genreId`, {
            method: 'POST',
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(genre)
        })
        .then((response)=> {         //cuando devuelve el json 
            
                dispatch({          //crea la acción
                type: ADD_GENRE,
                payload: response.data,
            })
            
        })
    }
}

export function sortByAlphabet(payload) {
    return{
    type: SORT_BY_ALPHABET,
    payload
}
  };

  export function sortByRating (payload){
    return {
    type: SORT_BY_RATING,
    payload
}
  };
 

export const filterByGenre = (genres)=> (dispatch, getState)=>{
    
        let gamesFilter = [];
        gamesFilter = getState().videogames.filter((g)=>(g.genres).includes(genres))
        
        dispatch({
    type: FILTER_BY_GENRE,
    payload: {
        genres,
        filterVideogames: gamesFilter
    }
})}

export const filterByCreator = payload =>({

    type: FILTER_BY_CREATOR,
    payload
}); 

