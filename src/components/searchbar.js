import React from 'react';
import {searchPkmn} from '../services/api.js';

const {useState} = React;

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const [pkmn, setPkmn] = useState();
    const [pkmnImg, setPkmnImg] = useState("");

    const onChange = (evt) => {
        setSearch(evt.target.value)
    }

    const onClick = async (evt) => {
        if (search === "0") {
            alert("La busqueda por ID debe ser mayor a 0.");
        }
        console.log("Buscando " + search)
        const data = await searchPkmn(search.toLowerCase());

        if (data === undefined || data === null || data.length < 1) {
            alert("No se encontraron resultados...")
        }
        const paddedIndex = ("00" + data.id).slice(-3);
        setPkmnImg(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`);
        setPkmn(data);
    }

    return (
        <div>
            <h2>Busqueda única</h2>
            <div className='div-search-bar-style'>
                <input placeholder='nombre o id' onChange={onChange} className="single-search-bar"></input>
            </div>
            <div className='button-search-bar-style'>
                <button onClick={onClick} className="search-button-style">Buscar</button>
            </div>
            <br/>
            <br/>
            <div>
                {
                    pkmn &&
                    <div>
                        <p className='pkmn-data-style'>{pkmn.name === undefined ? "Sin resultados" : "Nombre: " + pkmn.name.toUpperCase()}</p>
                        <p className='pkmn-data-style'>{pkmn.weight === undefined ? false : "Peso: " + pkmn.weight + " lbs"}</p>
                        <img src={pkmnImg} alt="" className="single-search-img"/>
                    </div>}
            </div>
        </div>
    );
};

export default Searchbar;