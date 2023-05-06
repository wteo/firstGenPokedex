import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './Results.module.css';
import { counterActions } from '../../store/index';

function Results(props) {

    const dispatch = useDispatch();

    const selectPokemonHandler = (event) => {
        dispatch(counterActions.selected(Number(event.target.id)));
      };

    return (
        <>
            <h3 className={styles.resultTitle}>Showing {props.currentResults.length} of {props.totalResults.length} Result(s):</h3>
                <div className={styles.resultsContainer} >
                    {
                    props.currentResults.map(result => (
                        <a href="#main-pokedex">
                            <div title={result.speciesResult} className={styles.result} key={result.id} onClick={selectPokemonHandler}>
                                <img src={result.image} id={result.id} alt={result.speciesResult}/>
                            </div>
                        </a>
                    ))}
            </div>
        </>
    );
}

export default Results;