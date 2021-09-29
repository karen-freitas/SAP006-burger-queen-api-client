import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductArea from './index';

describe('Tests for ProductArea page', () => {
	it('should render images', () => {
		render(<ProductArea />);

		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
	});
});
