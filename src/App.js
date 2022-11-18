import React from "react";
import Navbar from '../src/components/navbar';
import Searchbar from './components/searchbar';
import Pokedex from "./components/pokedex";
import { getAllPkmn, getPkmnData } from "./services/api";
import { FavoriteProvider } from "./context/favoriteContext";

const { useState, useEffect } = React;

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getAllPkmn(25, 25 * page);
            const promises = data.results.map(async (pokemon) => {
                return await getPkmnData(pokemon.url);
            })
            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotal(Math.ceil(data.count / 25));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log("Inside useeffect...");
        fetchPokemons();
    }, [page]);

    const updateFavoritePokemons = (name) => {
        const updated = [...favorites];
        const isFavorite = favorites.indexOf(name);
        if (isFavorite >= 0) {
            updated.splice(isFavorite, 1);
        }
        else {
            updated.push(name);
        }
        setFavorites(updated);
    }

    return (
        <FavoriteProvider value={{
            favoritePokemons: favorites,
            updateFavoritePokemons: updateFavoritePokemons
        }}>
            <div>
                <Navbar />
                <div className="single-search-div">
                    <Searchbar />
                </div>
                <div className="pokemon-body">
                    <Pokedex
                        loading={loading}
                        pokemons={pokemons}
                        page={page}
                        setPage={setPage}
                        total={total} />
                </div>
            </div>
        </FavoriteProvider>
    );
}

export default App;
