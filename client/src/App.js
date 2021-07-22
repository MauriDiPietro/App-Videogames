import './App.css';
import Card from './modules/Card'

import Home from './modules/Home/Home';
import NavBar from './modules/NavBar/NavBar';
import LandingPage from './modules/LandingPage/LandingPage'
import CreateGame from './modules/CreateGame/CreateGame'
import { Route } from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import React from 'react';






function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
      <NavBar/>
      <Route exact path='/' component={LandingPage}/>
      {/* <Route path='/home' component={NavBar} /> */}
      {/* <Route exact path='/home' component={SearchBar} /> */}
      <Route exact path='/home' component={Home}  />
      <Route exact path='/home/detail/:id' component={Card} />
      <Route exact path='/creategame' component={CreateGame}/>
      
      </BrowserRouter>
    </React.Fragment>
     
     
      
  );
}

export default App;
