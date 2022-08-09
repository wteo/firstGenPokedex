import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './Results.module.css';
import { ACTION_TYPES } from '../../store/index';

function Results(props) {

    const dispatch = useDispatch();

    const selectPokemonHandler = (event) => {
        dispatch({ type: ACTION_TYPES.selected, payload: event.target.id });
      };

    return (
        <>
            <h3 className={styles.resultTitle}>Result(s):</h3>
            <div className={styles.resultsContainer}>
                {
                props.enteredResults.map(result => (
                    <div className={styles.result} key={result.id} onClick={selectPokemonHandler}>
                        <img src={result.imageLink} id={result.id} alt={result.speciesNameResult}/>
                        <p>{result.speciesNameResult}</p>
                    </div>
                      )
                    )
                }
            </div>
        </>
    );
}

export default Results;