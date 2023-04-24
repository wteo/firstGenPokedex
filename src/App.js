import React, { useState, useEffect, Suspense } from 'react';
import { useSelector } from 'react-redux';

import styles from './App.module.css';

import PokedexTitle from './components/PokedexTitle/PokedexTitle';
import PokedexMain from './components/PokemonMain/PokedexMain';
import PokedexData from './components/PokedexData/PokedexData';
import PokedexSearch from './components/PokedexSearch/PokedexSearch';
import Results from './components/Results/Results';

import Pagination from './UI/Pagination';

import { fetchData } from './store/fetchData';

// const Results = React.lazy(() => import('./components/Results/Results'));
// const PokedexData = React.lazy(() => import('./components/PokedexData/PokedexData'));
// const PokedexSearch = React.lazy(() => import('./components/PokedexSearch/PokedexSearch'));

function App() {

  // Fetching pokemon data to feed into the Pokedex 
  const [enteredPokemonData, setEnteredPokemonData] = useState({});
  const [isSearched, setIsSearched] = useState(false);

  const { imageLink, speciesName, type1, type2, height, weight } = enteredPokemonData;

  const url = useSelector(state => state.url);

    useEffect(() => {
        fetchData(setEnteredPokemonData, url);
    }, [url]);

  
  // State to hide or show pokemon data
  const [dataButtonIsClicked, setDataButtonIsClicked] = useState(false);

  const dataButtonHandler = () => {
    setDataButtonIsClicked((dataButtonIsClicked) => !dataButtonIsClicked);
    setSearchButtonIsClicked(false);
    setIsSearched(false);
    setIsFetchingData(false);
    setEnteredResults([]);
    setCurrentPage(1);
  }

  // State to hide or show search menu
  const [searchButtonIsClicked, setSearchButtonIsClicked] = useState(false);

  const searchButtonHandler = () => {
    setDataButtonIsClicked(false);
    setIsSearched(false);
    setIsFetchingData(false);
    setEnteredResults([]);
    setCurrentPage(1);
    setSearchButtonIsClicked((searchButtonIsClicked) => !searchButtonIsClicked);
  }

  // States to handle filtered search
  const [enteredResults, setEnteredResults] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(null);
  const resultsArr = [];

  const enteredSearchHandler = async (searchedValue) => {

    setIsFetchingData(true);

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
          setIsFetchingData(false);
          return;
        } 
      }
    }
    
    if (resultsArr.length > 0) {
      setIsSearched(true);    
      setEnteredResults(resultsArr);
      setCurrentPage(1);
      setIsFetchingData(false);
    } else {
      setIsSearched(true);
      setEnteredResults('No Pokemon found. :-(');
      setCurrentPage(1);
      setIsFetchingData(false);
    }
  };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 12;
  
  // Get current posts
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = enteredResults.slice(indexOfFirstResult, indexOfLastResult);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <PokedexTitle />
      <Suspense fallback={<p>Loading...</p>}>
        <PokedexMain 
          imageLink={imageLink} 
          speciesName={speciesName} 
          onButtonData={dataButtonHandler} 
          onButtonSearch={searchButtonHandler} 
        />
        <div className={styles.dropDownNavigation}>
          <PokedexData onTransition={dataButtonIsClicked} type1={type1} type2={type2} height={height} weight={weight} />
          <PokedexSearch onTransition={searchButtonIsClicked} onSearch={enteredSearchHandler}/>
          {isFetchingData && <p>Fetching Data...</p>}
          {isSearched && enteredResults !== 'No Pokemon found. :-(' ? <Results currentResults={currentResults} totalResults={enteredResults} /> : <p>{enteredResults}</p>}
          { isSearched && enteredResults.length > 12 && enteredResults !== 'No Pokemon found. :-(' &&
            <Pagination resultsPerPage={resultsPerPage} totalResults={enteredResults.length} paginate={paginate} /> 
            }
        </div>
      </Suspense>
      <footer>© Wendy Teo 2023</footer>
    </div>
  );
}

export default App;
