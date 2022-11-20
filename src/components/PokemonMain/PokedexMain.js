import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './PokedexMain.module.css';
import rightArrow from '../../icons/right-arrow.png';
import leftArrow from '../../icons/left-arrow.png';
import question from '../../icons/question.png';
import search from '../../icons/search.png';
import { counterActions } from '../../store/index';

function PokedexMain(props) {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    // State to update new pokemon as user scroll left or right of the pokedex
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };


    const leftArrowButton = (
        <button aria-label='left' className={styles.leftButton} onClick={decrementHandler}>
            <img src={leftArrow} alt='leftArrow'/>
        </button>
    );

    const rightArrowButton = (
        <button aria-label='right' className={styles.rightButton} onClick={incrementHandler}>
            <img src={rightArrow} alt='rightArrow'/>
        </button>
    );
        
    return (
        <div className={styles.pokedexMain}>
            <div className={styles.pokedexImage}>
                { count > 1 ? leftArrowButton : <div></div> }
                <img src={props.imageLink} alt={props.speciesName} />
                { count < 151 ? rightArrowButton : <div></div> }
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