import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './index';

describe('Testes para componente de Input', () => {
	it('Deve renderizar um determinado texto', () => {
		const texto = 'Página não encontrada';
		render(<NotFound>{texto}</NotFound>);

		const textoP = screen.getByText('404');
		expect(textoP).toBeInTheDocument();
	});
});
