

import './App.css';
import { useState } from 'react';
import {Switch,Route}from 'react-router-dom'

import ListesUsers from './component/ListesUsers';
import Filter from './component/Filter';
import Post from './component/Post';
import Commentaires from './component/Commentaires';

function App() {
  

  return (
    <div className="App">

     
      <Switch>
        
        <Route exact path="/" component={ListesUsers }/> 
        <Route exact path="/Commentaires/:id" component={Commentaires}/>
        <Route exact path="/Post/:id" component={Post}/>
      </Switch>
      
      
    </div>
  );
}

export default App;
