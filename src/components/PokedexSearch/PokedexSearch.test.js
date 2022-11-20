import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexSearch from './PokedexSearch';


describe('PokedexSearch Component', () => {

    test('Renders "search" as Title', () => {
        render(<PokedexSearch />);
        const data = screen.getByTitle('search');
        expect(data).toBeInTheDocument();
    });
    
});