import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import store from '../../store/index'

import Results from './Results';

describe('Results Component', () => {

    test('Renders "result" as Text', () => {
        render(<Provider store={store}><Results enteredResults={[]} /></Provider>);
        const result = screen.getByText(/result/i);
        expect(result).toBeVisible();
    });   

});