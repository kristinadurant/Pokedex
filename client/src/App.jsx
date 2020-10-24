import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
// import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import Home from './components/Home'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'
import './App.css';


const App = () => {
  // const [serverMessage, setServerMessage] = useState('');

  // const fetchDemoData = () => {
  //   fetch('/api/demo')
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
      <Switch>
        <Route  exact path = "/" component={Home} />
        <Route path = "/pokedex" component={Pokedex} />
        <Route path = "/pokemon" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
