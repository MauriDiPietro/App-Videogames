// import React from 'react';
// import {useSelector} from 'react-redux';
// import {Link} from 'react-router-dom';


// function ResultsSearch() {
//     const buscador = useSelector((state)=> state.searchVideogameName);
// console.log(buscador)
  
//     return (
//          { 
//             buscador.map(game => (  
//                 <div key={game.id}>            
//                 <Link to={`/home/detail/${game.id}`}>
//                 <img className='gameImage'
//                 width={300}
//                 height={200}
//                 src={game.image}
//                 alt=''/>
//                 <div>{game.name}</div>
//                 </Link>
//                 </div>
//                 ))
//          }
        
//     )
// }

// export default ResultsSearch;