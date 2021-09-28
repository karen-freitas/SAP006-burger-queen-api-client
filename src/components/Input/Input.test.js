import React from 'react';
import { render, screen } from '@testing-library/react'
import Input from './index'

describe('Testes para componente de Input', () => {
    it('Deve renderizar um componente input', () => {
        render(<Input/>);
    });

    it('Deve conter uma função de onChange', () => {
        const onChange = jest.fn()
        render(<Input onChange={onChange}/>)
    })

    it('Deve conter um placeholder', () => {
        const placeholder = "Email"
        render(<Input placeholder={placeholder}/>)
        expect(screen.getAllByPlaceholderText("Email")).toBeTruthy()
    })
})