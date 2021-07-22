import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';





function NavBar() {
   

   
    
    // function Reload () {
    //     window.location.href = window.location.href;
    //     // getVideogames();
    // }

    return (
        <header className='navbar'>
           
            <nav>
                <ul className="list">
                    <li className="list-item">
                        
                        <NavLink exact to="/home" type='button'  >Home</NavLink>
                        
                        <NavLink  to="/creategame" >Create Game!</NavLink>
                       
                       
                    </li>
                </ul>
               
            </nav>
        </header>
    )
}



export default NavBar;