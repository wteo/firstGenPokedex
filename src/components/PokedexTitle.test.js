import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexTitle from './PokedexTitle';


describe('PokedexTitle Component', () => {

    test('Renders "Welcome to the unofficial Pokedex!" as a text', () => {
        render(<PokedexTitle />);
        const text = screen.getByText('Welcome to the unofficial Pokedex!', {exact: false});
        expect(text).toBeInTheDocument();
    });
    
});