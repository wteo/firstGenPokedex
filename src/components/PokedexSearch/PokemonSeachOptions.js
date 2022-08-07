import React from 'react';

export const types = ['None', 'Normal', 'Fire','Water','Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 
    'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy'];

function PokedexSearchOptions(props) {

    return (
          <React.Fragment>
            <label>{props.description}</label>
            <select id={props.id} onChange={props.onType} name={props.name} value={props.value}>
                {types.map((type) => <option value={type.toLowerCase()} key={type.toLowerCase()}>{type}</option>)}
            </select>
            <br />
          </React.Fragment>
    );
}

export default PokedexSearchOptions;