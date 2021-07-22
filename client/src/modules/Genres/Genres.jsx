// import React, {useEffect} from 'react';
// import {useParams} from 'react-router-dom'
// import {connect} from 'react-redux';
// import {getVideogames} from '../../store/actions/gamesActions';
// import {Link} from 'react-router-dom';
// import NavBar from '../NavBar/NavBar';



// function Genres(props) {
//     console.log(props, 'PROPS!!!!!!!!')
   
//     //useState para guardar el estado de la consulta y luego mostrarlo
   
//    function getVideogamesGenres(){
//        getVideogames();
//    }

//      useEffect(()=>{  //consulta una vez q se renderice el comp
        
//         getVideogamesGenres();
        
//      }, []);
//         // const genreParams = props.match.params.name
//         const {genres} = useParams();
//         const filterVideogames = props.videogames.filter((g)=>{
//             return g.genres.includes(genres)
//         })
//         console.log(filterVideogames, 'filtroooooo')
    
//     // var prueba= videogames.((game) => {
//     //     return game.genres.includes(genres)
//     // })
//     // console.log(prueba)
    

//     return (
//         <div>
//             <NavBar/>
           
//             <h3>Videogames Genre: {genres}</h3>
//             <div className='gameCard'>
//             <ul className='gamesGrid'>
//              {
//             filterVideogames.map((game) =>{
//                 return ( 
                    
//            <div key={game.id}>            
//            <Link to={`/home/detail/${game.id}`}>
//                <div>
//                <img className='gameImage' src={game.image}
//                width={300}
//                height={200}
//                alt= ''/>
//                </div>
//                {game.name} 
//                <div>
//                ({game.genres})
//                </div>
//             </Link>
//             </div>
//             )})
//               }
//             </ul>
//             </div>
                       
        
//             {/* <p>{match.params.genres}</p>
//              <h1>{props.game.name}</h1>
//              <h4>{props.game.genres}</h4> */}
                
//         </div>
//     )
// }
                 
                
                
                
    

// function mapStateToProps (state){
//     return{
//         videogames : state.videogames
//     }
// }

// function mapDispatchToProps (dispatch) {
//     return {
//         getVideogames: game => {
//             dispatch(getVideogames(game))
//         }
//     }
// }

// export default connect (mapStateToProps, mapDispatchToProps)(Genres);