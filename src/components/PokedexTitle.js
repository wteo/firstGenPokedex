import React from 'react';

import styles from './PokedexTitle.module.css';

import pokedexLogo from '../icons/pokedexLogo.webp';

function PokedexTitle() {
    return (
        <div>
            <img className={styles.pokedexTitle} src={pokedexLogo} alt='pokedex logo'/>
            <div className={styles.about}>
                <h3>About</h3>
                <p>Welcome to the unofficial Pokedex! Here, you can find all the information you want about your favourite first-generation Pokemon.</p>
            </div>
        </div>
    );
}

export default PokedexTitle;