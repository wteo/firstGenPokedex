import React from 'react';

import styles from './PokedexMain.module.css';
import rightArrow from '../icons/right-arrow.png';
import leftArrow from '../icons/left-arrow.png';
import question from '../icons/question.png';
import search from '../icons/search.png';

function PokedexMain(props) {
    
    return (
        <div className={styles.pokedexMain}>
            <div className={styles.pokedexImage}>
                <button className={styles.leftButton}>
                    <img src={leftArrow} alt='rightArrow'/>
                </button>
                <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='ditto'/>
                <button className={styles.rightButton}>
                    <img src={rightArrow} alt='rightArrow'/>
                </button>
                <div></div>
                <h3 className={styles.pokemonName}>Ditto</h3>
                <div></div>
            </div>
            <div className={styles.pokedexButtons}>
                <button onClick={props.onButtonData}>
                    <img src={question} alt='questionButton' />
                </button>
                <button onClick={props.onButtonSearch}>
                    <img src={search} alt='searchButton' />
                </button>
            </div>
        </div>
    );
}

export default PokedexMain;