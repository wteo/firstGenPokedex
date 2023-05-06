import React, { useState, useEffect } from 'react';

import Card from '../../UI/Card';
import Options, { types } from './Options/Options';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import styles from './Search.module.css';

function Search(props) {

  const [selectedType1, setSelectedType1] = useState(types[0]);
  const [selectedType2, setSelectedType2] = useState(types[0]);
  const [keyedSpecies, setKeyedSpecies] = useState('');

  const selectTypeHandler1 = (event) => {
    setSelectedType1(event.target.value);
  }

  const selectTypeHandler2 = (event) => {
    setSelectedType2(event.target.value);
  }

  const keySpeciesHandler = (event) => {
    setKeyedSpecies(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const filters = {
      type1: selectedType1,
      type2: selectedType2,
      species: keyedSpecies
    }
    props.onSearch(filters);
    setSelectedType1(types[0]);
    setSelectedType2(types[0]);
    setKeyedSpecies('');
  };

  // States to handle errorMessage
  const [showError, setShowError] = useState(false);

  const closeErrorHandler = () => {
      setShowError(false);
  };


  useEffect(() => {
    if (selectedType1 === selectedType2 && selectedType1 !== types[0] && selectedType2 !== types[0]) {
      setShowError(true);
      setSelectedType2(types[0]);
      return;
    }
  }, [selectedType1, selectedType2]);


  return (
    <Card onTransition={props.onTransition} title='search'>
      <form aria-label='form-submit' onSubmit={submitHandler}>
        <h4>Search Pokemon by their type(s).</h4>
        <div className={styles.typesList}>
          <Options 
            description='Primary Type:' 
            id='firstType' 
            onType={selectTypeHandler1} 
            name={selectedType1} 
            value={selectedType1}
          />
          <Options 
            description='Secondary Type:' 
            id='secondType' 
            onType={selectTypeHandler2} 
            name={selectedType2} 
            value={selectedType2}
          />
        </div>
        
        <h4>Or by name.</h4>
        <div className={styles.inputContainer}>
          <label>Species name:</label>
          <input 
            type='text' 
            placeholder='Enter a pokemon species' 
            onChange={keySpeciesHandler} 
            name={keyedSpecies} 
            value={keyedSpecies}
          />
      </div>
        <br />
        <button className={styles.searchButton}>Search</button>
        { showError && <ErrorMessage message="Secondary type cannot be the same as the primary type." show={showError} onClose={closeErrorHandler} /> }
      </form>
    </Card>
  );
}

export default Search;