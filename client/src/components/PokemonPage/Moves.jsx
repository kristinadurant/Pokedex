import React, {useContext} from 'react';
import {PokemonContext } from '../../context/PokemonContext';

const Moves = ({ moves }) => {

    const { setPopUp } = useContext(PokemonContext);

    return (
        <div className="moves">
        <div className='pokemoves'>
            {moves && moves.map((move, index) =>{
              return <span key={index}>{move.move.name} </span>
            })} 
        </div>
        <button className="closeDropList" onClick={(e) => setPopUp(false)}>
          &times;
        </button>        
      </div>
    )
}

export default Moves;
