import React from 'react';

import styles from './App.module.css';

import PokedexTitle from './components/PokedexTitle';
import PokedexMain from './components/PokedexMain';
import PokedexData from './components/PodedexData';
import PokedexSearch from './components/PokedexSearch/PokedexSearch';

function App() {
  return (
    <div className={styles.container}>
      <PokedexTitle />
      <PokedexMain />
      <div className={styles.dropDownNavigation}>
        <PokedexData />
        <PokedexSearch />
      </div>
    </div>
  );
}

export default App;
