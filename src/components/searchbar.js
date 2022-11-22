import React from 'react';
import '../css/styles.css';
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
        if (search === "0") {
            alert("La busqueda por ID debe ser mayor a 0.");
        }
        else if (parseInt(search) > 891) {
            alert("La busqueda por ID debe ser menor a 891...");
        }
        else {
            console.log("Buscando... " + search)
            const data = await searchPkmn(search.toLowerCase());

            if (data === undefined || data === null || data.length < 1) {
                alert("No se encontraron resultados...")
            }
            else {
                const paddedIndex = ("00" + data.id).slice(-3);
                setPkmnImg(`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`);
                setPkmn(data);
            }
        }
    }

    return (
        <div className="container-searched">
            <h3 className="ttl-busqueda">BUSQUEDA</h3>
            <div className='div-search-bar-style'>
                <input placeholder='nombre o id' onChange={onChange} className="single-search-bar"></input>
            </div>
            <div className='button-search-bar-style'>
                <button onClick={onClick} className="search-button-style">Buscar</button>
            </div>
            <br />
            <div>
                {
                    pkmn &&
                    <div id="search-container" className={pkmn.types === undefined ? false : pkmn.types[1] ? pkmn.types[0].type.name + "-" + pkmn.types[1].type.name : pkmn.types[0].type.name}>
                        <div className='img-search'>
                            <img src={'http://play.pokemonshowdown.com/sprites/xyani/' + pkmn.name.replace("-", "") + '.gif'} alt="" className="single-search-img" />
                        </div>
                        <div className='info-search'>
                            <p className='pkmn-data-style'>{pkmn.name === undefined ? false : "NAME: " + pkmn.name.toUpperCase()}</p>
                            <p className='pkmn-data-style'>{pkmn.id === undefined ? false : "ID: " + pkmn.id}</p>
                            <p className='pkmn-data-style'>{pkmn.types === undefined ? false : pkmn.types[1] ? "TYPES: " + pkmn.types[0].type.name + "/" + pkmn.types[1].type.name : "TYPE: " + pkmn.types[0].type.name}</p>
                            <p className='pkmn-data-style'>{pkmn.stats ? "HP: " + pkmn.stats[0].base_stat : false}</p>
                            <p className='pkmn-data-style'>{pkmn.stats ? "ATK: " + pkmn.stats[1].base_stat : false}</p>
                            <p className='pkmn-data-style'>{pkmn.stats ? "DEF: " + pkmn.stats[2].base_stat : false}</p>
                            <p className='pkmn-data-style'>{pkmn.stats ? "SPATK: " + pkmn.stats[3].base_stat : false}</p>
                            <p className='pkmn-data-style'>{pkmn.stats ? "SPDEF: " + pkmn.stats[4].base_stat : false}</p>
                            <p className='pkmn-data-style'>{pkmn.stats ? "SPEED: " + pkmn.stats[5].base_stat : false}</p>
                        </div>
                    </div>
                }
            </div>
            <br />
        </div>
    );
};

export default Searchbar;