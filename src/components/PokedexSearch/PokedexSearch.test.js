import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import PokedexSearch from './PokedexSearch';

describe('PokedexSearch Component', () => {
    test('Renders "search" as Title', () => {
        render(<PokedexSearch />);
        const search = screen.getByTitle('search');
        expect(search).toBeInTheDocument();
    });
});

