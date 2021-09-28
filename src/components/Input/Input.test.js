import React from 'react';
import { render, screen } from '@testing-library/react'
import Input from './index'

describe('Tests for Input component', () => {
    it('should render the component input', () => {
        render(<Input/>);
    });

    it('should have the onChange function', () => {
        const onChange = jest.fn()
        render(<Input onChange={onChange}/>)
    })

    it('should have the provided placeholder', () => {
        const placeholder = "Email"
        render(<Input placeholder={placeholder}/>)
        expect(screen.getAllByPlaceholderText("Email")).toBeTruthy()
    })
})