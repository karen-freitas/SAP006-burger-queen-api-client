import React from 'react'
import { render, screen, cleanup} from '@testing-library/react'
import Popup from './index'

afterEach(cleanup)

describe('Tests for ButtonFefault component', () => {
  it('Deve renderizar um popup com texto e função determinadas', () => {
    const popUpText = "Texto do popup";
    const onClose = jest.fn
    render(<Popup popupText={popUpText} onClose={onClose}></Popup>);
    const texto = screen.getByText(popUpText)
    expect(texto).toBeInTheDocument();
  });
});