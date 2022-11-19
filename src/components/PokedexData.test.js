import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexData from './PokedexData';


describe('PokedexData Component', () => {

    test('Renders "Height" as a text', () => {
        render(<PokedexData />);
        const text = screen.getByText('height', { exact: false });
        expect(text).toBeInTheDocument();
    });
    
});