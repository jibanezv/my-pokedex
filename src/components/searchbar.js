import React from 'react';
import { searchPkmn } from '../services/api.js';

const { useState } = React;

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [pkmn, setPkmn] = useState();
    const [pkmnImg, setPkmnImg] = useState("");

    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    const onClick = async (evt) => {
        console.log("Buscando " + search)
        const data = await searchPkmn(search);
        const paddedIndex = ("00" + data.id).slice(-3);
        setPkmnImg(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`);
        setPkmn(data);
    }

    return (
        <div>
            <div className='div-search-bar-style'>
                <input placeholder='Buscar pokémon...' onChange={onChange}></input>
            </div>
            <div className='button-search-bar-style'>
                <button onClick={onClick}>Buscar</button>
            </div>
            <br />
            <br />
            <div>
                {
                    pkmn &&
                    <div>
                        <div>Nombre: {pkmn.name}</div>
                        <div>Peso: {pkmn.weight}</div>
                        <img src={pkmnImg} alt="pkmImage" />
                    </div>}
            </div>
        </div>
    );
};

export default Searchbar;