import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './App.module.css';

import PokedexTitle from './components/PokedexTitle';
import PokedexMain from './components/PokedexMain';
import PokedexData from './components/PodedexData';
import PokedexSearch from './components/PokedexSearch/PokedexSearch';

import { fetchData, ACTION_TYPES } from './store/index';

function App() {

  // Fetching pokemon data to feed into the Pokedex 
  const [enteredPokemonData, setEnteredPokemonData] = useState({});

  const { imageLink, speciesName, type1, type2, height, weight } = enteredPokemonData;

  const count = useSelector(state => state.count);
  const url = useSelector(state => state.url);
  const dispatch = useDispatch();

    useEffect(() => {
        fetchData(setEnteredPokemonData, url);
    }, [url]);

    // State to update new pokemon as user scroll left or right of the pokedex
    const incrementHandler = () => {
        dispatch({ type: ACTION_TYPES.increment, payload: 1 });
    };

    const decrementHandler = () => {
        dispatch({ type: ACTION_TYPES.decrement, payload: 1 });
    };

  
  // State to hide or show pokemon data
  const [dataButtonIsClicked, setDataButtonIsClicked] = useState(false);

  const dataButtonHandler = () => {
    setSearchButtonIsClicked(false);
    setDataButtonIsClicked((dataButtonIsClicked) => !dataButtonIsClicked);
  }

  // State to hide or show search menu
  const [searchButtonIsClicked, setSearchButtonIsClicked] = useState(false);

  const searchButtonHandler = () => {
    setDataButtonIsClicked(false);
    setSearchButtonIsClicked((searchButtonIsClicked) => !searchButtonIsClicked);
  }

  return (
    <div className={styles.container}>
      <PokedexTitle />
      <PokedexMain 
        imageLink={imageLink} 
        speciesName={speciesName} 
        count={count} 
        onButtonData={dataButtonHandler} 
        onButtonSearch={searchButtonHandler} 
        onIncrement={incrementHandler} 
        onDecrement={decrementHandler}
      />
      <div className={styles.dropDownNavigation}>
        {dataButtonIsClicked && <PokedexData type1={type1} type2={type2} height={height} weight={weight} />}
        {searchButtonIsClicked && <PokedexSearch />}
      </div>
    </div>
  );
}

export default App;
