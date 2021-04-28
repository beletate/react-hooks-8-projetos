import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CadastrarTarefa from './cadastrar-tarefa'
import axiosMock from 'axios'

describe('Teste do componente de cadastrar tarefa', () => {
   
    it('deve cadastrar uma nova tarefa', async () => {
       const { getByTestId, findByTestId } = render(<CadastrarTarefa />) 
       fireEvent.change(getByTestId('txt-tarefa'), { target: { value: 'Teste de componente.'}})
       fireEvent.click(getByTestId('btn-cadastrar'))
       const modal = await findByTestId('modal')
       expect(modal).toHaveTextContent('Sucesso')
       expect(modal).toHaveTextContent('Tarefa adicionada com sucesso!')
    })
    
})