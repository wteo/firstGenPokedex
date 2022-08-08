import React  from 'react';

import styles from './PokedexMain.module.css';
import rightArrow from '../icons/right-arrow.png';
import leftArrow from '../icons/left-arrow.png';
import question from '../icons/question.png';
import search from '../icons/search.png';

function PokedexMain(props) {

    const leftArrowButton = (
        <button className={styles.leftButton} onClick={props.onDecrement}>
            <img src={leftArrow} alt='leftArrow'/>
        </button>
    );

    const rightArrowButton = (
        <button className={styles.rightButton} onClick={props.onIncrement}>
            <img src={rightArrow} alt='rightArrow'/>
        </button>
    );
        
    return (
        <div className={styles.pokedexMain}>
            <div className={styles.pokedexImage}>
                { props.count > 1 ? leftArrowButton : <div></div> }
                <img src={props.imageLink} alt={props.speciesName} />
                { props.count < 151 ? rightArrowButton : <div></div> }
                <div></div>
                <h3 className={styles.pokemonName}>{props.speciesName}</h3>
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

export default React.memo(PokedexMain);