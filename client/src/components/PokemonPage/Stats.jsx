import React, {useContext} from 'react';
import {PokemonContext } from '../../context/PokemonContext';

const Stats = ({stats}) => {

    const { setPopUp } = useContext(PokemonContext);

    return (
        <>
        <div className='pokestats'>
            {stats && stats.map((stat, index) => {
            return (
                <div key={index}>
                <p>{stat.stat.name}: {stat.base_stat} pts </p>
                <p><span style={{ width: stat.base_stat/2 + "%"}}></span></p>
                </div>
            );
            })}
        </div>
        <button className="closeDropList" onClick={(e) => setPopUp(false)}>
            &times;
        </button>
      </>
    )
}

export default Stats;
