import {GET_VIDEOGAMES, SEARCH_VIDEOGAMES_NAME, SEARCH_VIDEOGAME_ID, 
    CREATE_VIDEOGAME, SORT_BY_ALPHABET, GET_GENRES, FILTER_BY_GENRE,
    FILTER_BY_CREATOR, GET_VIDEOGAMES_LOCAL, SORT_BY_RATING, GET_PLATFORMS, ADD_GENRE, GET_VIDEOGAMES_API} from '../actions/gamesActions';

const initialState = {
    videogames: [],
    genres: [],
    createVideogame: [],
    searchVideogames: [],
    searchVideogameId: [],
    searchVideogameName: [],
    filterVideogames: [],
    sortAlphabeth:[],
    localVideogames: [],
    platforms : [],

}



const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VIDEOGAMES:
            return {
                ...state,
                videogames: action.payload,
            };
            case GET_VIDEOGAMES_API:
                return {
                    ...state,
                    videogames: action.payload,
                };        
                
                
        case GET_VIDEOGAMES_LOCAL:
            return {
                ...state,
                videogames: action.payload
            }
        case SEARCH_VIDEOGAMES_NAME:
            return {
                ...state,
                videogames: action.payload
            }
        case SEARCH_VIDEOGAME_ID:
            return {
                ...state,
                searchVideogameId: action.payload
            }
        case CREATE_VIDEOGAME:
            return {
                ...state,
                localVideogames: action.payload                
            }
        case ADD_GENRE:
            return {
                ...state,
                genres: action.payload
            }
        case SORT_BY_ALPHABET:
            
            let sortedArr = action.payload === "asc" ?
            sortAsc(state.videogames, 'name') :
            sortDesc(state.videogames, 'name');
      
        return {
            ...state,
            videogames: sortedArr
        };
        case SORT_BY_RATING:
            let sortedArr2 = action.payload === "RatingAsc" ?
            ratingAsc(state.videogames, 'rating') :
            ratingDesc(state.videogames, 'rating');
      
        return {
            ...state,
            videogames: sortedArr2
        };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_PLATFORMS:
                return {
                    ...state,
                    platforms: action.payload
                }
        case FILTER_BY_GENRE:
            return {
                ...state,
                filterVideogames: action.payload
                
            }
        case FILTER_BY_CREATOR:
            return {
                ...state,
                gamesFilter: action.payload.filterVideogames,
                filterBy: action.payload.genre
            }
            default:
                return {
                    ...state,
                };
       
    }
};

export default rootReducer;

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field]> a[field]) return -1;

        return 0;
    })
  }
  
  function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field]> a[field]) return 1;

        return 0;
    })
  }

  function ratingAsc(array) {
            
    let ascArray = array.sort(function (a, b) {
        let date1 = new Date(a.rating)
        let date2 = new Date(b.rating)
        return date1 - date2;
    });
    
    return ascArray;
}

function ratingDesc(array) {
    let descArray = array.sort(function (a, b) {
        let date1 = new Date(a.rating)
        let date2 = new Date(b.rating)
        return date2 - date1;
    })
    
    return descArray;
}