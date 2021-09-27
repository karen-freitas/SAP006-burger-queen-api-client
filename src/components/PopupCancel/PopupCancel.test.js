import React from 'react'
import { render, screen, cleanup} from '@testing-library/react'
import PopupCancel from './index'

afterEach(cleanup)

describe('Tests for ButtonFefault component', () => {
  it('Deve renderizar um popup com texto e função determinadas', () => {
    const popUpText = "Texto do popup";
    const onClose = jest.fn
    const onCancel = jest.fn
    render(<PopupCancel popupText={popUpText} onClose={onClose} onCancel={onCancel}></PopupCancel>);
    const texto = screen.getByText(popUpText)
    expect(texto).toBeInTheDocument();
  });
});