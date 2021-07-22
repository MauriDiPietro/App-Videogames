import React, {useState, useEffect} from 'react';
// import {useDispatch} from 'react-redux'
import {connect} from 'react-redux';
import {getVideogamesName} from '../../store/actions/gamesActions';

import {Link} from 'react-router-dom';
import './SearchBar.css'

function SearchBar (props) {
    // const dispatch = useDispatch();
    const [name, setVideogames] = useState([]);
    

    function handleChange(event) {
             setVideogames( event.target.value );
            
           }
    
    function handleSubmit(event) { //click en buscar
       event.preventDefault();
       props.getVideogamesName(name);  //PARA QUE HAGA DISPATCH DEgetVideogames 
        setVideogames('');    
    }                         
    
    useEffect ( () =>{
         getVideogamesName()
      }, []);

    

        return (
            <div>
                
                <form onSubmit={handleSubmit}>
                    <div>
                <input className='search' type='text' placeholder='enter name of videogame' value={name} onChange={handleChange} /> 
                    
                    </div>
                
                </form>
                
            <div className='gameCard'>
            {/* <ul className='gamesGrid'> */}
                 {  
           
            props.searchVideogameName && props.searchVideogameName
           .map(game => (  
            <div key={game.id}>            
            <Link to={`/home/detail/${game.id}`}>
            <img className='gameImage'
            width={300}
            height={200}
            src={game.image}
            alt=''/>
            <div>{game.name}</div>
            <div>
            {game.genres}
            </div>
            </Link>
            </div>
            ))
        }
            {/* </ul> */}
            </div>
            </div>
        )
    }

    
    function mapStateToProps(state) {
    return {
        searchVideogameName: state.searchVideogameName
    }
    }

    function mapDispatchToProps(dispatch) {
        return {
            getVideogamesName: name=> dispatch(getVideogamesName(name))
        }
    }
    


    
    export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
    // export default SearchBar;