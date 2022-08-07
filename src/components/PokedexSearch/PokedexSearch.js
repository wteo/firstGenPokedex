import React, { useState, useEffect } from 'react';

import Card from '../../UI/Card';
import PokedexSearchOptions, { types } from './PokemonSeachOptions';

//import styles from './PokedexSearch.module.css';

function PokedexSearch() {

  // const [isSearched, setIsSearched] = useState('');
  const [enteredTypeOne, setEnteredTypeOne] = useState(types[0]);
  const [enteredTypeTwo, setEnteredTypeTwo] = useState(types[0]);
  const [enteredPokemonName, setEnteredPokemonName] = useState('');

  const typeOneHandler = (event) => {
    setEnteredTypeOne(event.target.value);
  }

  const typeTwoHandler = (event) => {
    setEnteredTypeTwo(event.target.value);
  }

  const nameHandler = (event) => {
    setEnteredPokemonName(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const filteredSearch = {
      type1: enteredTypeOne,
      type2: enteredTypeTwo,
      speciesName: enteredPokemonName
    }
    console.log(filteredSearch);
    setEnteredTypeOne(types[0]);
    setEnteredTypeTwo(types[0]);
    setEnteredPokemonName('');
  };


  useEffect(() => {
    if (enteredTypeOne === enteredTypeTwo && enteredTypeOne !== types[0] && enteredTypeTwo !== types[0]) {
      alert('Second type cannot be the same as the first type!');
      setEnteredTypeTwo(types[0]);
      return;
    }
  }, [enteredTypeOne, enteredTypeTwo]);


  return (
    <Card>
      <form onSubmit={submitHandler}>
        <PokedexSearchOptions description='First Type:' id='firstType' onType={typeOneHandler} name={enteredTypeOne} value={enteredTypeOne}/>
        <PokedexSearchOptions description='Second Type:' id='secondType' onType={typeTwoHandler} name={enteredTypeTwo} value={enteredTypeTwo}/>
        <label>Species name:</label>
        <input type='text' placeholder='Enter a pokemon species' onChange={nameHandler} name={enteredPokemonName} value={enteredPokemonName}/>
        <br />
        <button>Search</button>
      </form>
    </Card>
  );
}

export default PokedexSearch;