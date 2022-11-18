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
                <button onClick={onClick} className="search-button-style">Buscar</button>
            </div>
            <br />
            <br />
            <div>
                {
                    pkmn &&
                    <div>
                        <p className='pkmn-data-style'>{pkmn.name === undefined ? "Sin resultados" : "Nombre: " + pkmn.name}</p>
                        <p className='pkmn-data-style'>{pkmn.weight === undefined ? false : "Peso: " + pkmn.weight + " lbs"}</p>
                        <img src={pkmnImg} alt="" />
                    </div>}
            </div>
        </div>
    );
};

export default Searchbar;