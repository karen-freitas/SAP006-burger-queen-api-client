import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PopupCancel from './index'
import ButtonDefault from "../ButtonDefault/index"


describe('Tests for ButtonFefault component', () => {
  it('Deve renderizar um popup com texto e função determinadas', () => {
    const popUpText = "Texto do popup";
    const onClose = jest.fn
    const onCancel = jest.fn
    render(<PopupCancel popupText={popUpText} onClose={onClose} onCancel={onCancel}></PopupCancel>);
    const texto = screen.getByText(popUpText)
    expect(texto).toBeInTheDocument();
  });

  it('Deve renderizar um botão com o texto fornecido', () => {
    const texto = "Texto do botão";
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