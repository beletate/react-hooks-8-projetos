import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CadastrarTarefa from './cadastrar-tarefa'

describe('Teste do componente de cadastrar tarefa', () => {

    it('deve renderizar o componente sem erro', () => {
        const div = document.createElement('div')
        ReactDOM.render(<CadastrarTarefa />, div)
        ReactDOM.unmountComponentAtNode(div)
    } )

    it('deve cadastrar uma nova tarefa', () => {
       const { getByTestId } = render(<CadastrarTarefa />) 
       fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Teste de componente.'}})
       fireEvent.click(getByTestId('btn-cadastrar'))
       expect(getByTestId('modal')).toHaveTextContent('Sucesso')
       expect(getByTestId('modal')).toHaveTextContent('Tarefa adicionada com sucesso!')
    })
    
})