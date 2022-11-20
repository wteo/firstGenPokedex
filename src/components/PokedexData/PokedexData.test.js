import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexData from './PokedexData';


describe('PokedexData Component', () => {

    test('Renders "data" as Title', () => {
        render(<PokedexData />);
        const data = screen.getByTitle('data');
        expect(data).toBeInTheDocument();
    });
    
});