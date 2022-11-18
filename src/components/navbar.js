import React from 'react';
import '../css/styles.css';
import reactLogo from '../logo.svg';

let Pkdxlogo = "https://1.bp.blogspot.com/-0V4itR_v87M/UtsCF-ehNYI/AAAAAAAABjU/UEQ5Jiy_85o/s1600/pokedex-3d-logo.png";

const Navbar = () => {
    return (
        <nav className='nav-style'>
            <img src={reactLogo} className="react-logo-style" alt="react-logo" />
            <img src={Pkdxlogo} className='pkdex-logo-style' alt="pkdx-logo" />
        </nav>
    )
};

export default Navbar;