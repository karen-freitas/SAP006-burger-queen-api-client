import React from 'react';
import { render, screen } from '@testing-library/react';
import OrdersPanel from './index';

describe('Tests for OrdersPanelcomponent', () => {
	it('should render products information', () => {
		render(<OrdersPanel/>);
    expect(screen.getByText('Em espera')).toBeInTheDocument()
    expect(screen.getByText('Iniciados')).toBeInTheDocument()
    expect(screen.getByText('Prontos')).toBeInTheDocument()
    expect(screen.getByText('Entregues')).toBeInTheDocument()
    expect(screen.getByText('Histórico')).toBeInTheDocument()
    
    		
	});

  it('should render a image', () => {
    render(<OrdersPanel/>);
    const btn = screen.getAllByRole('button')
    expect(btn).toHaveLength(3)
  })

});