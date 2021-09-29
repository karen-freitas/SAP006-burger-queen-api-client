import React from 'react';
import { render } from '@testing-library/react';
import LinkAside from './index';

describe('Tests for LinkAside component', () => {
	it('should call a function', () => {
		const onClick = jest.fn();
		render(<LinkAside onClick={onClick}></LinkAside>);
	});
});
