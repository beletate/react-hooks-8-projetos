import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './calculadora'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calculadora', () => {

    it('deve renderizar o component sem erros.', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Calculadora />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('deve limpar o campo de núemros.', () => {
        const { getByTestId, getByText } = render(<Calculadora />);
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('C'));
        expect(getByTestId('txtNumeros')).toHaveValue('0')
    })

    it('deve somar 2 + 3 e obter 5.', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('5')
    })

    it('deve subtrair 5 - 3 e obter 2.', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('-'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('2')
    })

    it('deve multiplicar 2 * 3 e obter 6.', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('*'));
        fireEvent.click(getByText('3'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('6')
    })

    it('deve dividir 6 / 2 e obter 3.', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('6'));
        fireEvent.click(getByText('/'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('3')
    })

    it('deve somar 1.25 + 7.25 e obter 9.', () => {
        const { getByTestId, getByText } = render(<Calculadora />)
        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('2'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('+'));
        fireEvent.click(getByText('7'));
        fireEvent.click(getByText('.'));
        fireEvent.click(getByText('7'));
        fireEvent.click(getByText('5'));
        fireEvent.click(getByText('='));
        expect(getByTestId('txtNumeros')).toHaveValue('9')
    })


})