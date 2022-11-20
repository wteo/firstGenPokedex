import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexMain from './PokedexMain';
import { Provider } from 'react-redux';
import store from '../../store/index'

describe('PokedexMain Component', () => {

    test('Renders all Buttons', () => {
        render(<Provider store={ store } ><PokedexMain/></Provider>);
        const button1 = screen.getAllByRole('button').length;
        expect(button1).toBe(3);
    });    
});

