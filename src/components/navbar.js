import React from 'react';
import FavoriteContext from '../context/favoriteContext';
import '../css/styles.css';
import reactLogo from '../logo.svg';

const { useContext } = React;

const Navbar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    let Pkdxlogo = "https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png";

    return (
        <div>
            <nav className='nav-style'>
                <img src={reactLogo} className="react-logo-style" alt="react-logo" />
                <img src={Pkdxlogo} className='pkdex-logo-style' alt="pkdx-logo" />
            </nav>
            <div className="fav-nav-icon">
                <div className='favorite-count'>💙{favoritePokemons.length}</div>
            </div>
        </div>
    )
};

export default Navbar;