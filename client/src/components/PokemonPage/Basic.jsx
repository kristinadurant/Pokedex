import React, {useContext} from 'react';
import {PokemonContext } from '../../context/PokemonContext';

const Basic = ({pokemon, types, abilities}) => {

    const { setPopUp } = useContext(PokemonContext);

    return (
        <>
            <div>
                <div className="id">
                    <p>#{pokemon.id}</p>
                </div>
                <div className="name">
                    <p>{pokemon.name}</p>
                </div>
                <div className="type">
                    {types.map((type, index) => {
                    return <p key={index}>{type.type.name}</p>;
                    })}
                    <span className="typeword">Type</span>
                </div>
                <div className="abilities">
                    Abilities:
                    {abilities.map((ability, index) => {
                    return <p key={index}>{ability.ability.name}</p>;
                    })}
                </div>
                <div className="physical">
                    <p> Height: {Math.round(pokemon.height*0.328084)} ft</p>
                    <p> Weight: {Math.round(pokemon.weight*0.220462)} lbs</p>
                </div>
            </div>

            <div className="buttons">
                <button onClick={(e)=>{setPopUp("moves")}}>MOVES</button>
                <button onClick={(e)=>{setPopUp("stats")}}>STATS</button>
            </div>      
        </>
    )
}

export default Basic;