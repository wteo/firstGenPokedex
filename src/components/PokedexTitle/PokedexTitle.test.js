import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexTitle from './PokedexTitle';


describe('PokedexTitle Component', () => {

    test('Renders image "Logo" ', () => {
        render(<PokedexTitle />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
    });

    test('Renders header "About" ', () => {
        render(<PokedexTitle />);
        const header = screen.getByRole('heading');
        expect(header).toBeInTheDocument();
    });
    
});