import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexSearchOptions from './PokedexSearchOptions';

describe('PokedexSearchOptions Component', () => {

    test('Renders "First Type" as text', () => {
        render(<PokedexSearchOptions description='First Type:' />);
        const type1 = screen.getByText('First Type:');
        expect(type1).toBeInTheDocument();
    });

    test('Renders "Second Type" as text', () => {
        render(<PokedexSearchOptions description='Second Type:' />);
        const type2 = screen.getByText('Second Type:');
        expect(type2).toBeInTheDocument();
    });
    
});