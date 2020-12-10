import React, {useState, useEffect, useContext} from 'react';
import {PokemonContext } from '../context/PokemonContext';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Stats from '../components/PokemonPage/Stats';
import Moves from '../components/PokemonPage/Moves';
import Basic from '../components/PokemonPage/Basic';

const Pokemon = () => {
    let { name } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [types, setTypes] = useState([]);
    const [image, setImage] = useState("");
    const [abilities, setAbilities] = useState([]);
    const [typeClass, setTypeClass] = useState(["pokemon"]);
    const [typeClass1, setTypeClass1] = useState("");
    const [moves, setMoves] = useState([]);
    const [stats, setStats] = useState([]);
    const { popUp } = useContext(PokemonContext);
    

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${name}`
            );
            setPokemon(response.data);
            setTypes(response.data.types);
            setImage(response.data.sprites.other["official-artwork"].front_default);
            setAbilities(response.data.abilities);
            setTypeClass(response.data.types[0].type.name);
            setTypeClass1(response.data.types[1] && response.data.types[1].type.name);
            setMoves(response.data.moves);
            setStats(response.data.stats);
        };
        fetchData();
    },[name]);

    return (
        <div className={"pokepage " + typeClass + " " + typeClass1}>
                  
          <Link to="/Pokedex">
              <button className="backbutton">
                <i class="fas fa-angle-left"></i> BACK
              </button>
          </Link>

          <div className="container">
            <div className="image">
              <img src={image} alt={pokemon.name} />
            </div>
            <div className="info">
              {!popUp && pokemon && <Basic pokemon={pokemon} types={types} abilities={abilities}/>}
              {popUp === "moves" && <Moves moves={moves}/>}
              {popUp === "stats" && <Stats stats={stats}/>}
            </div>

          </div>
        </div>
    )
    
}

export default Pokemon;