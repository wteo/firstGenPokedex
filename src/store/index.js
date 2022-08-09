import { createSlice, configureStore } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        url: `https://pokeapi.co/api/v2/pokemon/1`,
        count: 0,
        id: 0,
        imageLink: 'Image not found',
        speciesName: '???',
        type1: '???',
        type2: '???',
        height: '???',
        weight: '???'
    },
    reducers: {
        increment(state) {
            state.count++;
            state.url = `https://pokeapi.co/api/v2/pokemon/${state.count}`;
        },
        decrement(state) {
            state.count--;
            state.url = `https://pokeapi.co/api/v2/pokemon/${state.count}`;
        },
        selected(state, action) {
            state.count = action.payload;
            state.url = `https://pokeapi.co/api/v2/pokemon/${action.payload}`;
        }
    }
});


export const fetchData = async(setState, link) => {
    const response = await fetch(link);
    const data = await response.json();

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

const store = configureStore({ reducer: pokemonSlice.reducer});

export const counterActions = pokemonSlice.actions;

export default store;