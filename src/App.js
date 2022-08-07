import React, { useState } from 'react';

import styles from './App.module.css';

import PokedexTitle from './components/PokedexTitle';
import PokedexMain from './components/PokedexMain';
import PokedexData from './components/PodedexData';
import PokedexSearch from './components/PokedexSearch/PokedexSearch';

function App() {

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
      <PokedexMain onButtonData={dataButtonHandler} onButtonSearch={searchButtonHandler}/>
      <div className={styles.dropDownNavigation}>
        {dataButtonIsClicked && <PokedexData />}
        {searchButtonIsClicked && <PokedexSearch />}
      </div>
    </div>
  );
}

export default App;
