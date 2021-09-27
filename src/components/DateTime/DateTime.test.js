import React from 'react'
import { render, screen } from '@testing-library/react'
import DateTime from './index'


describe('Tests for DateTime component', () => {
  it('Deve renderizar a data e hora atual', () => {
    const texto = "27 set. 2021, Segunda-feira - 🕐16:46h"
    render(<DateTime>{texto}</DateTime>)
  });
});
