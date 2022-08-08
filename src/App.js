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
  const [isSearched, setIsSearched] = useState(false);

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
    setIsSearched(false);
    setEnteredResults([]);
    setDataButtonIsClicked((dataButtonIsClicked) => !dataButtonIsClicked);
  }

  // State to hide or show search menu
  const [searchButtonIsClicked, setSearchButtonIsClicked] = useState(false);

  const searchButtonHandler = () => {
    setDataButtonIsClicked(false);
    setIsSearched(false);
    setEnteredResults([]);
    setSearchButtonIsClicked((searchButtonIsClicked) => !searchButtonIsClicked);
  }

  // States to handle filtered search
  const [enteredResults, setEnteredResults] = useState([]);
  const resultsArr = [];

  const enteredSearchHandler = async (searchedValue) => {
    const enteredSearchValues = {
      type1       : searchedValue.type1,
      type2       : searchedValue.type2,
      speciesName : searchedValue.speciesName
    }

    let i = 1;

    while (i <= 151) {
      const fullURL = `https://pokeapi.co/api/v2/pokemon/${i}`
      const response = await fetch(fullURL);
      const data = await response.json();
      const speciesNameResult = data.name;
      const id = data.id;
      const imageLink = data.sprites.front_default;
      const type1Result = data.types[0].type.name;
      const type2Result = data.types[1]?.type.name;
      i++;

      if (enteredSearchValues.speciesName !== '' && speciesNameResult.includes(enteredSearchValues.speciesName.toLowerCase().trim())) {
        resultsArr.push({speciesNameResult, imageLink, id});
      } else if (enteredSearchValues.speciesName === '') {
        if (enteredSearchValues.type1 === type1Result && enteredSearchValues.type2 === type2Result) {
          resultsArr.push({speciesNameResult, imageLink, id});
        } else if ((enteredSearchValues.type1 === type1Result || enteredSearchValues.type1 === type2Result) && enteredSearchValues.type2 === 'None') {
          resultsArr.push({speciesNameResult, imageLink, id});
        } else if (enteredSearchValues.type1 === 'None') {
          alert ('You must either first enter a value for first type or enter a value for species name.');
          return;
        } 
      }
    }
    
    if (resultsArr.length > 0) {
      setIsSearched(true);    
      setEnteredResults(resultsArr);
    } else {
      setIsSearched(true);
      setEnteredResults('No Pokemon found. :-(');
    }
  };

  const selectPokemonHandler = (event) => {
    console.log(event.target.alt);
    console.log(event.target.id);
    dispatch({ type: ACTION_TYPES.selected, payload: event.target.id });
  };

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
        {searchButtonIsClicked && <PokedexSearch onSearch={enteredSearchHandler}/>}
        {isSearched && enteredResults !== 'No Pokemon found. :-(' ?
          (
            <>
              <h3 className={styles.resultTitle}>Result(s):</h3>
              <div className={styles.resultsContainer}>
                {
                  enteredResults.map(result => (
                    <div className={styles.result} key={result.id} onClick={selectPokemonHandler}>
                      <img src={result.imageLink} id={result.id} alt={result.speciesNameResult}/>
                      <p>{result.speciesNameResult}</p>
                    </div>
                    )
                  )
                }
              </div>
            </>
          ) 
          : <p>{enteredResults}</p>
        }
      </div>
    </div>
  );
}

export default App;
