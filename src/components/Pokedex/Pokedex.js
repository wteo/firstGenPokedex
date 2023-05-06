import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Pokedex.module.css';
import right from '../../icons/right-arrow.png';
import left from '../../icons/left-arrow.png';
import search from '../../icons/search.png';
import { counterActions } from '../../store/index';

function Pokedex(props) {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    // State to update new pokemon as user scroll left or right of the pokedex
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };


    const leftButton = (
        <button aria-label='left' className={styles.leftButton} onClick={decrementHandler}>
            <img src={left} alt='left arrow button'/>
        </button>
    );

    const rightButton = (
        <button aria-label='right' className={styles.rightButton} onClick={incrementHandler}>
            <img src={right} alt='right arrow button'/>
        </button>
    );

    const typeOne = <p className={styles.type}>Type(s): {props.type1}</p>;
    const typeOneAndTwo = <p className={styles.type}>Type(s): {props.type1} / {props.type2}</p>;
        
    return (
        <div className={styles.pokedex}>
            <h4>Nintendo</h4>
            <div className={styles.pokedexImage}>
                { count > 1 ? leftButton : <div></div> }
                <div className={styles.innerContainer}>
                    <img id="main-pokedex" src={props.image} alt={props.species} />
                    <div className={styles.data}>
                        <h2>{props.species}</h2>
                        {props.type2 === undefined ? typeOne : typeOneAndTwo }
                        <p>Height: {`${(props.height / 10).toFixed(1)}`} M</p>
                        <p>Weight: {`${(props.weight / 10).toFixed(1)}`} Kg</p>
                    </div>
                </div>
                { count < 151 ? rightButton : <div></div> }
            </div>
            <div className={styles.pokedexButtons}>
                <button aria-label='search' onClick={props.onButtonSearch}>
                    <img src={search} alt='searchButton' />
                </button>
            </div>
        </div>
    );
}

export default Pokedex;