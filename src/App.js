import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './App.module.css';

import PokedexTitle from './components/PokedexTitle';
import PokedexMain from './components/PokedexMain';
import PokedexData from './components/PodedexData';
import PokedexSearch from './components/PokedexSearch/PokedexSearch';

import { fetchData, ACTION_TYPES } from './store/index';

function App() {

  // Fetching pokemon data 
  const [enteredPokemonData, setEnteredPokemonData] = useState({});

  const { imageLink, speciesName } = enteredPokemonData;

  const count = useSelector(state => state.count);
  const url = useSelector(state => state.url);
  const dispatch = useDispatch();

    useEffect(() => {
        fetchData(setEnteredPokemonData, url);
    }, [url]);

    // Handling pokemon data as user scroll either left or right of the pokedex
    const incrementHandler = () => {
        dispatch({ type: ACTION_TYPES.increment, payload: 1 });
    };

    const decrementHandler = () => {
        dispatch({ type: ACTION_TYPES.decrement, payload: 1 });
    };

  
  // Hide/unhide data/search buttons
  const [dataButtonIsClicked, setDataButtonIsClicked] = useState(false);
  const [searchButtonIsClicked, setSearchButtonIsClicked] = useState(false);

  const dataButtonHandler = () => {
    setSearchButtonIsClicked(false);
    setDataButtonIsClicked((dataButtonIsClicked) => !dataButtonIsClicked);
  }

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
        {dataButtonIsClicked && <PokedexData />}
        {searchButtonIsClicked && <PokedexSearch />}
      </div>
    </div>
  );
}

export default App;
