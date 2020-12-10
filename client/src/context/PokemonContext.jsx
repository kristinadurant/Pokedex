import React, { createContext, useState } from 'react';

const PokemonContext = createContext({});

const PokemonContextProvider = ({ children }) => {
  const [popUp, setPopUp] = useState(false);

  return (
    <PokemonContext.Provider value={{ popUp, setPopUp}}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonContextProvider };