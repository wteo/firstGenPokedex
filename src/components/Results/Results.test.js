import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../../store/index'

import Results from './Results';

const MockProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

describe('Results Component', () => {

    test('Renders "result" as Text', () => {
        render(<MockProvider><Results enteredResults={[]} /></MockProvider>);
        const result = screen.getByText(/result/i);
        expect(result).toBeVisible();
    });   

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
        render(<MockProvider><Results enteredResults={MockArr} /></MockProvider>);
        const listedPokemon = screen.getAllByTitle('listed');
        expect(listedPokemon.length).toBe(3);
    });

});