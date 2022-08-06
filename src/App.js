import React from 'react';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.pokedexTitle}>Pokedex</div>
      <div className={styles.pokedexImage}>
        <button>Left</button>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='ditto'/>
        <button>Right</button>
        <h1>Ditto</h1>
      </div>
      <div>
        <div className={styles.pokedexData}>Data</div>
        <div className={styles.pokedexSearchi}>Search</div>
      </div>
    </div>
  );
}

export default App;
