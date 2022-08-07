import React from 'react';

import Card from '../../UI/Card';
import PokedexSearchOptions from './PokemonSeachOptions';

//import styles from './PokedexSearch.module.css';

function PokedexSearch() {
    return (
        <Card>
          <form>
            <PokedexSearchOptions description='Type 1:' id='primaryType'/>
            <PokedexSearchOptions description='Type 2:' id='secondaryType'/>
            <label>Species name:</label>
            <input type='text' placeholder='Ditto' />
            <br />
            <button>Search</button>
          </form>
        </Card>
    );
}

export default PokedexSearch;