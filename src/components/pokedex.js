import React from 'react';
import '../css/styles.css';
import Pokemon from './pokemon';
import Pagination from "./pagination";

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading } = props;
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    }

    return (
        <div>
            <div className="pkdx-container-style">
                <h1>Pokédex</h1>
                <Pagination
                    page={page + 1}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}
                />
            </div>
            {
                loading ? (
                    <div>Cargando Pokemones...</div>
                ) : (
                    <div className="pkdx-grid-style">
                        {pokemons.map((pokemon, idx) => {
                            return (
                                <Pokemon pokemon={pokemon} key={pokemon.name} />
                            )
                        })}
                    </div>
                )
            }
        </div>
    )
};

export default Pokedex;