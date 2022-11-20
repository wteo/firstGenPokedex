import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import PokedexMain from './PokedexMain';
import { Provider } from 'react-redux';
import store from '../../store/index'

const MockProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

describe('PokedexMain Component', () => {

    test('Renders all Buttons', () => {
        render(<MockProvider><PokedexMain/></MockProvider>);
        const button1 = screen.getAllByRole('button').length;
        expect(button1).toBe(3);
    });    
});

