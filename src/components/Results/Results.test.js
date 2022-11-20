import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../../store/index'

import Results from './Results';

const MockProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

describe('Results Component', () => {

    test('Renders "result" as Text', () => {
        render(<MockProvider><Results enteredResults={[]} /></MockProvider>);
        const result = screen.getByText(/result/i);
        expect(result).toBeVisible();
    });   

});