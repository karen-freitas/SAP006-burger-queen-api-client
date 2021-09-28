import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './index';
import ButtonDefault from "../../components/ButtonDefault"


describe('Testes para a página de Login', () => {
	it('Deve renderizar botões, imagens e textos', () => {
		render(<Login/>);

        const button = screen.getByRole('button');
        const text = screen.getByText('Login');
        const img = screen.getByRole('img');

        expect(button).toBeInTheDocument();
        expect(text).toBeInTheDocument();
        expect(img).toBeInTheDocument();
    });

    it('Deve renderizar um botão com o texto fornecido', () => {
        const texto = "Nome botão";
        render(<ButtonDefault>{texto}</ButtonDefault>);
        const btn = screen.getByText(texto)
        expect(btn).toBeInTheDocument();
      });
    
      it('Deve disparar uma função quando clicado', () => {
        const onClick = jest.fn()
        render(<ButtonDefault onClick={onClick}/>)
        const btn = screen.getByRole('button')
        expect(onClick).toHaveBeenCalledTimes(0)
        fireEvent.click(btn)
        expect(onClick).toHaveBeenCalledTimes(1)
      })
});