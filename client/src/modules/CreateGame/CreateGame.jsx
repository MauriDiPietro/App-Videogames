import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {createVideogame, getGenres, getPlatforms} from '../../store/actions/gamesActions';
import axios from 'axios';
import './CreateGame.css';

//Nombre, descripción, fecha de lanzamiento, rating
//seleccionar/agregar varios generos
//seleccionar/agregar varias plataformas
//boton para crear

function CreateGame ({getGenres, genres, createVideogame, videogames, getPlatforms, platforms} ) {

const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
        image: ''
    })

    useEffect(()=>{ 
       
        getGenres();
        getPlatforms();
        
    }, []); 

// const platforms = props.videogames.platforms.filter((item, index)=>{
//     return props.videogames.platforms.indexOf(item) === index;
// })

function handleSubmit(e) {
    e.preventDefault();
    console.log('Submit OK')
    axios.post('http://localhost:3001/videogame', input)
        .then(response => console.log(response.data)) 
        .catch(error  => console.log(error))
        
}

function handleInputChange(e) {
    setInput({
        ...input,                        
         [e.target.name]: e.target.value  
        });
}

function handleAddGenre() {
let genreSelect = null;
if(document.querySelector('#genre1') !== null) {
    genreSelect = document.querySelector('#genre1').value
}

let genreOk = input.genres.concat(genreSelect);

setInput({
     ...input,
    genres: genreOk
})

console.log(input)
}



function handleAddPlatform() {
let platformSelect= null;
if(document.querySelector('#platform1') !== null) {
    platformSelect = document.querySelector('#platform1').value
}
let platformOk = input.platforms.concat(platformSelect);
setInput({
    ...input,
   platforms: platformOk
})
console.log(input)
}



    return (
        <div className='estilos'>
        <h2 className='alineado'>Create Videogame</h2>
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name: </label>
                <input 
                type='text'
                onChange={(e)=>handleInputChange(e)} 
                value={input['name']}
                placeholder='Name...'
                name='name'/>
            </div>
            <div>
                <label>Description: </label>
                <input
                type='text'
                onChange={handleInputChange} 
                value={input['description']}
                placeholder='Description...'
                name='description'/>
            </div>
            <div>
                <label>Released: </label>
                <input
                type='text'
                onChange={handleInputChange} 
                value={input['released']}
                placeholder='Released (DD-MM-YYYY)'
                name='released'/>
            </div>
            <div>
                <label>Rating: </label>
                <input
                type='text'
                onChange={handleInputChange} 
                value={input['rating']}
                placeholder='Rating...'
                name='rating'/>
            </div>
            <div>
                <label>Image: </label>
                <input
                type='text'
                onChange={handleInputChange} 
                value={input['image']}
                paceholder='insert URL'
                name='image'/>
            </div>
            <label>Select Genres: </label>
            <select id='genre1'  >
            <option value='No Filter'>Select Genre 1:</option>
            {genres.map((g)=>{
                                return (
                                    
                                    <option  value={g.name}>{g.name}</option>
                                    
                                )
                            })}
            </select>
            <button name='genres' type='button' onClick={()=>handleAddGenre()}>Add Genre</button>
          
            <br></br>
            <label>Select Platforms: </label>
            <select id='platform1'>
            <option value='Select Platform'>Select Platform</option>
            {platforms.map((p)=>{
                                return (
                                    
                                    <option  value={p}>{p}</option>
                                    
                                )
                            })}
            </select>
            <button name='platforms' type='button' onClick={()=> handleAddPlatform()} >Add Platform</button>
          
            <br></br>
            <button type='submit' value='Create Game' name="Enviar">Create Videogame!</button>
            {/* <input type="submit" value='Create Game' name="Enviar" /> */}
        </form>
        <div className='alineado'>
        <h4>New Videogame:</h4>
        <span>Name: {input.name}</span>
        <br></br>
        <span>Genres: {input.genres} </span>
        <br></br>
        <span>Platforms: {input.platforms} </span>
        <br></br>
        <span>Released: {input.released} </span>
        <br></br>
        <span>Description: {input.description} </span>
        <br></br>
        <span>Rating: {input.rating} </span>
        </div>
        </div>
        

    )

}
    function mapStateToProps(state) {
        return {
            genres: state.genres,
            videogames: state.videogames,
            platforms: state.platforms
        };
    };
            
    function mapDispatchToProps(dispatch) {
        return {
            getGenres: name => {dispatch(getGenres(name))},
            createVideogame:(game)=>{dispatch(createVideogame(game))},
            getPlatforms: () =>{dispatch(getPlatforms())}
        };
    };
           
           
    
    
export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);