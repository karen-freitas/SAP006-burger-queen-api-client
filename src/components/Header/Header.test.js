import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import {createMemoryHistory} from 'history'
import { Router } from 'react-router-dom';
import Header from './index';
import DateTime from '../DateTime/index';
import ButtonLogout from '../ButtonLogout/index';

describe('Tests for Header component', () => {
	it('should render the text provided', () => {
		const text = 'Divino Burger';
		render(<Header>{text}</Header>);
		const texto = screen.getByText(text);
		expect(texto).toBeInTheDocument();
	});

	it('should render a DateTime component', () => {
		const dataHora = '27 set. 2021, Segunda-feira - 🕐16:46h';
		render(<DateTime>{dataHora}</DateTime>);
	});

	it('should call a ButtonLogout component', () => {
		render(<ButtonLogout></ButtonLogout>);
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument();
	});

    it('should handle navigation', () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push') 
        render(
            <Router history={history}>
              <ButtonLogout/>
            </Router>
        )
        fireEvent.click(screen.getByRole('button')) 
        expect(pushSpy).toHaveBeenCalled()
      })
});
