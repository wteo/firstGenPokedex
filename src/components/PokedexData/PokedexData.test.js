import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexData from './PokedexData';


describe('PokedexData Component', () => {

    test('Renders "data" as Title', () => {
        render(<PokedexData />);
        const data = screen.getByTitle('data');
        expect(data).toBeInTheDocument();
    });

    test('Renders Pokemon with only 1 "Type" ', () => {
        render(<PokedexData onTransition={true} type1='grass' />);
        const type = screen.getByText(/type/i);
        expect(type).toBeInTheDocument();
    });

    test('Renders Pokemon with 2 "Types" ', () => {
        render(<PokedexData onTransition={true} type1='grass' type2='poison' />);
        const type2 = screen.getByText(/type/i);
        expect(type2).toBeInTheDocument();
    });

});