import React from 'react';

function PokedexSearchOptions(props) {

    const types = ['None', 'Normal', 'Fire','Water','Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 
    'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy'];

    return (
          <React.Fragment>
            <label>{props.description}</label>
            <select id={props.id} name={props.id}>
                {types.map((type) => <option value={type.toLowerCase()}>{type}</option>)}
            </select>
            <br />
          </React.Fragment>
    );
}

export default PokedexSearchOptions;