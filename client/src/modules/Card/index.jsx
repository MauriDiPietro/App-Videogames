
import React, {useEffect} from 'react';
// import {useParams} from 'react-router';
import {connect} from 'react-redux';
import {getGameforId} from '../../store/actions/gamesActions'
import './Card.css'

function Card(props) {
// const {id} = useParams();  
// // console.log(idGame)
// const[game, setGame] = useState([])

    // function getGameforIdDetail(){
    //     getGameforId(id)
    // }
    useEffect(()=> {
        
        const id = props.match.params.id;
        props.getGameforId(id);
      
        
    }, []);


    return(
       
         <div className='background'>
             {/* {props.searchVideogameId && props.searchVideogameId.map(v => {
                 return ( */}
                 
            <div className='gameCard'>
            <h3>Detail of VideoGame</h3>
             <h1>{props.game.name}</h1>
             <h4>{props.game.genres}</h4>
             <h5>{props.game.released}</h5>
             <img className='gameImage' src={props.game.image} 
             width={500}
             height={300} alt='https://thumbs-prod.si-cdn.com/MQotyJBx-9gkn7Wu6vSVoWdDSys=/fit-in/1600x0/https://public-media.si-cdn.com/filer/75/6b/756b7562-10fc-4a9c-a2ac-0dba0c77946d/istock-157739391.jpg'/>
             <h3>Rating: {props.game.rating}</h3>
             <h3>Platforms: {props.game.platforms}</h3>
             <p>{props.game.description}</p>

        </div>
             {/* )})
             } */}
             </div>
            
)
            }
                     

//mapear el estado de redux con el estado del componente y traer las actions para poder utilizarlas
//array donde se va modificando el estado local
function mapStateToProps (state) {
    return {
        game: state.searchVideogameId
    }
}

// para poder utilizar las actions
//function declarada en actions
function mapDispatchToProps (dispatch) {
    return {
        getGameforId: id => {
            dispatch(getGameforId(id))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)