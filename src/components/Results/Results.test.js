import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../../store/index'

import Results from './Results';

const results = [];

const fetchData =  async(i) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

const MockResultProvider = () => {
    return (
        <Provider store={store}>
            <Results enteredResults={results} />
        </Provider>
    );
}

describe('Results Component', () => {

    test('Renders "result" as Text', () => {
        render(<MockResultProvider />);
        const resultText = screen.getByText(/result/i);
        expect(resultText).toBeInTheDocument();
    });   

  
    test('Renders found Pokemon via Fetching Data from Pokemon API', () => {
        let i = 0;
        while (i < 3) {
            const data = fetchData(i);
            results.push({ id: i, speciesNameResult: data.name });
            i++
        }
        render(<MockResultProvider />);
        const listedPokemon = screen.getAllByTitle('listed');
        expect(listedPokemon.length).toBe(3);
    })
    
});


  /*
    const MockArr = [{ 
        id: 1, 
        speciesNameResult: 'bulbasaur' 
    },{ 
        id: 2, 
        speciesNameResult: 'ivysaur'  
    }, { 
        id: 3, 
        speciesNameResult: 'venusaur' 
    }];  
    

    test('Renders found Pokemon via Search', () => {
        render(<MockResultProvider />);
        const listedPokemon = screen.getAllByTitle('listed');
        expect(listedPokemon.length).toBe(3);
    });

    */