import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import Input from './index'

afterEach(cleanup)

describe('Testes para componente de Input', () => {
    it('Deve renderizar um input', () => {
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