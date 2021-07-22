import React, {useEffect, useState} from 'react';

import {connect} from 'react-redux';
import {getVideogames, getGenres, getVideogamesLocal, 
    sortByAlphabet, sortByRating, getVideogamesApi} from '../../store/actions/gamesActions';
import {Link} from 'react-router-dom';
import './Home.css';
import SearchBar from '../SearchBar/index';
import Pagination from '../Pagination/Pagination';



function Home ({videogames, getVideogames, getGenres, genres, localVideogames, sortByAlphabet, sortByRating, getVideogamesApi,getVideogamesLocal }) {

useEffect(()=>{ 
    getVideogames();
    getGenres();
    getVideogamesLocal();   
}, []); //arreglo de dependencias, para q se ejecute una sola vez, cuando se carga el componente

// let videogamesCopy = useSelector((state)=>state.videogames);

// const [genreSelected, setgenreSelected] = useState('');   //estado del select GENRE
const [filteredVideogames, setFilteredVideogames] = useState([]); //estado para cargar los filtros renderizados

function filterVideogames(e) {     
   
    let filteredVideogames2 = videogames.filter((g)=>{
        return g.genres ? g.genres.includes(e.target.value) : false;
    });
    setFilteredVideogames(filteredVideogames2)   
}


function handleCreator(e){  //filtro por creator

if (e.target.value === 'All') {
    // setFilteredVideogames('');
    // setFilteredVideogames(videogamesCopy)
    // setCurrentPage(0)
    getVideogames();
} 
if (e.target.value === 'Api') {
    getVideogamesApi();
    
};

// setFilteredVideogames(filteredVideogames2) 
// console.log(filteredVideogames)
// setCurrentPage(0)
// } 

if (e.target.value === 'Local') {
    // let filteredVideogames = videogamesCopy.filter((g)=>{
    //     return g.id ? g.id.length > 7 : false;
    // });
    // setFilteredVideogames('');
    // setFilteredVideogames(filteredVideogames) 
    // setCurrentPage(0)
    getVideogamesLocal();
    }
}

    
  


const [orderSelected, setorderSelected] = useState('');   //estado del select ORDEN ALFABETICO

function sortFunction(e){
    let selectOrder = e.target.value;
    // setFilteredVideogames('');
    // let direction = selectOrder.endsWith('asc') ? "asc" : "desc";
    setorderSelected(selectOrder)
    sortByAlphabet(orderSelected)
    setCurrentPage(0)
    console.log(displayGames)
}
 
const [ratingSelected, setratingSelected] = useState(''); //estado del ORDEN POR RATING


function sortRatingFunction(e) {
    let selectRating = e.target.value;
    // let direction = selectRating.endsWith('Asc') ? "RatingAsc" : "RatingDesc";
    setratingSelected(selectRating)
    sortByRating(ratingSelected);
    setCurrentPage(0)
}


const [currentPage, setCurrentPage] = useState(0);
// const gamesPerPage = 15;
const [gamesPerPage, setGamesPerPage] = useState(15);
const indexOfLastGame = currentPage * gamesPerPage;
const indexOfFirstGame = indexOfLastGame - gamesPerPage;
//const currentGames = filteredVideogames.length ? filteredVideogames : videogames.slice(indexOfFirstGame, indexOfLastGame + gamesPerPage);



// Cambio de page
const paginate = pageNumber => setCurrentPage(pageNumber);

const displayGames = filteredVideogames.length ? filteredVideogames.slice(indexOfLastGame, indexOfLastGame + gamesPerPage)
.map((game) =>{
    return ( 
<div className='caja' key={game.id}>            
<Link to={`/home/detail/${game.id}`}>
   <div className='name'>
   <img className='gameImage' src={game.image}
   width={300}
   height={200}
   alt= ''/>
   
   <h3 className='nameGame'>{game.name}</h3> 
   
   <h4 className='nameGame'>({game.genres})</h4>
   </div>
</Link>
</div>
)})
        
:   

videogames.slice(indexOfLastGame, indexOfLastGame + gamesPerPage).map((game) =>{
return ( 
    
<div className='caja' key={game.id}>            
<Link to={`/home/detail/${game.id}`}>
<div>
<img className='gameImage' src={game.image}
width={300}
height={200}
alt= ''/>
</div>
<div >
<h3 className='nameGame'>{game.name}</h3> 

<h4 className='nameGame'>({game.genres})</h4>
</div>
</Link>
</div>
)}) 






return (

    <div className='background'>
    <SearchBar />
    <h4 className='titulo'>VIDEOGAMES  APP</h4>
             <div className='alineado'>
             {   
                <select name='select'
               
                onChange={(e)=> filterVideogames(e)}
                >
                                    <option value='No Filter'>Filter Genre</option>
                    {genres.map((g)=>{
                                return (
                                    
                                    <option value={g.name}>{g.name}</option>
                                    
                                )
                            })}
                    </select>
                   
                   
             }
            
           
            <select 
            
            onChange={(e)=> handleCreator(e)}>
                                    <option value='' disabled selected>Filter Creator</option>
                                    <option name='All' value='All'>All</option>
                                    <option name='Local' value='Local'>Local</option>
                                    <option name='Api' value='Api'>Api</option>
            </select>
            
              
            <select value={orderSelected} onChange={(e) => sortFunction(e)}>
                    <option value='no' >Select Order</option>
                    <option value='asc'> Z-A</option>
                    <option value='desc'>A-Z</option>
            </select>
            <select value={ratingSelected} onChange={(e) => sortRatingFunction(e)}>   
                    <option value='no'>Select Rating</option>
                    <option value='RatingAsc'>- to +</option>
                    <option value='RatingDesc'>+ to -</option>
            </select>
            </div>

            <Pagination gamesPerPage={gamesPerPage} totalGames={(filteredVideogames.length ? filteredVideogames : videogames).length} paginate={paginate}/>
            <div className='gameCard'>
            <ul className='gamesGrid'>
            
              {/* { filteredVideogames.length ? 
              
              filteredVideogames.map((game) =>{
                                return ( 
                           <div key={game.id}>            
                           <Link to={`/home/detail/${game.id}`}>
                               <div>
                               <img className='gameImage' src={game.image}
                               width={300}
                               height={200}
                               alt= ''/>
                               </div>
                               {game.name} 
                               <div>
                               ({game.genres})
                               </div>
                            </Link>
                           </div>
                           )})
                                    
             :   
             
             videogames.map((game) =>{
                 return ( 
            <div key={game.id}>            
            <Link to={`/home/detail/${game.id}`}>
                <div>
                <img className='gameImage' src={game.image}
                width={300}
                height={200}
                alt= ''/>
                </div>
                <div>
                {game.name} -
                ({game.genres})
                </div>
             </Link>
            </div>
            )}) 
        
                 } */}{displayGames}
            </ul>
            </div>
            </div>
        );
                 
    }
            
           

    
    function mapStateToProps(state) {
    return {
        videogames: state.videogames,
        genres: state.genres,
       
        
    };
    };

    function mapDispatchToProps(dispatch) {
        return {
            getVideogames: game =>{ dispatch(getVideogames(game))
            },
            getGenres: name => {dispatch(getGenres(name))},
            getVideogamesLocal: () => dispatch(getVideogamesLocal()),
            sortByAlphabet: (selectOrder) => dispatch(sortByAlphabet(selectOrder)),
            sortByRating: (selectRating) => dispatch(sortByRating(selectRating)),
            getVideogamesApi: ()=>dispatch(getVideogamesApi())
    };
};
    
   

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/////////////////////
            
           
            
