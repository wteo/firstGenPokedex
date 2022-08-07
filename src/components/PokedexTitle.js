import React from 'react';

import styles from './PokedexTitle.module.css';

import pokedexLogo from '../icons/pokedexLogo.webp';

function PokedexTitle() {
    return (
        <div>
            <img className={styles.pokedexTitle} src={pokedexLogo} alt='pokedex logo'/>
            <h3>About</h3>
            <p>Hello!</p>
        </div>
    );
}

export default PokedexTitle;