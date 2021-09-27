import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFound from './index';

afterEach(cleanup);

describe('Testes para componente de Input', () => {
	it('Deve renderizar um determinado texto', () => {
		const texto = 'Página não encontrada';
		render(<NotFound>{texto}</NotFound>);
	});
});
