import { createStore } from '@reduxjs/toolkit';

const defaultState = {
    url: `https://pokeapi.co/api/v2/pokemon/1`,
    count: 1,
    imageLink: '',
    speciesName: '',
    type1: 'Grass',
    type2: 'Poison',
    height: '60',
    weight: '60'
};

export const fetchData = async(setState, link) => {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);

    setState({
        imageLink: data.sprites.front_default,
        speciesName: data.species.name,
        type1: data.types[0].type.name,
        // type2: data.types[1].type.name === 'undefined' ? 'None' : data.types[1].type.name,
        height: data.height,
        weight: data.weight
    });
};

export const ACTION_TYPES = {
    increment: 'INCREMENT',
    decrement: 'DECREMENT'
}


const pokemonReducer = (state = defaultState, action) => {
    if (action.type === ACTION_TYPES.increment) {
        return {
            ...state,
            count: state.count + action.payload,
            url: `https://pokeapi.co/api/v2/pokemon/${state.count + action.payload}`,
            type1: state.type1,
            type2: state.type2,
            height: state.height,
            weight: state.weight
        }
    }
    if (action.type === ACTION_TYPES.decrement) {
        return {
            ...state,
            count: state.count - action.payload,
            url: `https://pokeapi.co/api/v2/pokemon/${state.count - action.payload}`,
            type1: state.type1,
            type2: state.type2,
            height: state.height,
            weight: state.weight
        }
    }
    return state;
}

const store = createStore(pokemonReducer);

export default store;