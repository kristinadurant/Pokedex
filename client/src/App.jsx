import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { PokemonContextProvider } from './context/PokemonContext';
import Home from './components/Home';
import Pokedex from './components/Pokedex';
import Pokemon from './pages/Pokemon';
import PokemonType from './components/PokemonType';
import './pokeball.css'



const App = () => {

  return ( 
      <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={Home} />
          <Route  exact path="/pokedex" component={Pokedex} />
          <PokemonContextProvider>
            <Route  exact path="/pokemon/:name" component={Pokemon} />
          </PokemonContextProvider>
          <Route exact path="/type/:type" component={PokemonType} />
        </Switch>
      </BrowserRouter>

  );
};

export default App;
