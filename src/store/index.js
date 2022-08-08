import { createStore } from '@reduxjs/toolkit';

const defaultState = {
    url: `https://pokeapi.co/api/v2/pokemon/1`,
    count: 0,
    id: 0,
    imageLink: 'Image not found',
    speciesName: '???',
    type1: '???',
    type2: '???',
    height: '???',
    weight: '???'
};

export const fetchData = async(setState, link) => {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);

    setState({
        id: data.id,
        imageLink: data.sprites.front_default,
        speciesName: data.species.name,
        type1: data.types[0].type.name,
        type2: data.types[1]?.type.name,
        height: data.height,
        weight: data.weight
    });
};

export const ACTION_TYPES = {
    increment: 'INCREMENT',
    decrement: 'DECREMENT',
    selected: 'SELECTED'
}


const pokemonReducer = (state = defaultState, action) => {
    if (action.type === ACTION_TYPES.increment) {
        return {
            ...state,
            count: Number(state.count) + Number(action.payload),
            url: `https://pokeapi.co/api/v2/pokemon/${Number(state.count) + Number(action.payload)}`,
            id: state.id,
            type1: state.type1,
            type2: state.type2,
            height: state.height,
            weight: state.weight
        }
    }
    if (action.type === ACTION_TYPES.decrement) {
        return {
            ...state,
            count: Number(state.count) - Number(action.payload),
            url: `https://pokeapi.co/api/v2/pokemon/${Number(state.count) - Number(action.payload)}`,
            id: state.id,
            type1: state.type1,
            type2: state.type2,
            height: state.height,
            weight: state.weight
        }
    }
    if (action.type === ACTION_TYPES.selected) {
        return {
            count: action.payload,
            url: `https://pokeapi.co/api/v2/pokemon/${action.payload}`,
            id: state.id,
            imageLink: state.imageLink,
            speciesName: state.speciesName,
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