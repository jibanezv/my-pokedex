import React, { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";
import { searchPkmn } from '../services/api.js';

const { useState } = React;


const Pokemon = (props) => {
    const { pokemon } = props;
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
    const [typesPkmn, settypesPkmn] = useState("");

    const blueHeart = "💙";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? blueHeart : blackHeart;
    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }
    
    const getType = async (idx) => {
        let res = await searchPkmn(idx);
        res = res.types.map((type, idx) => { return type.type.name });
        let fres = "";
        for (let item of res) {
            fres += item + " "
        }
        fres = fres.trim().replace(" ", "-");
        settypesPkmn(fres)
    }

    getType(pokemon.id);

    return (
        <div className={typesPkmn}>
            <div className="div-pokemon-img">
                <img className="pokemon-img" src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h2>{pokemon.name}</h2>
                    <div className="pokemon-id">#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button onClick={clickHeart} className="heart-btn">
                        <div className="pokemon-favorite">{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;