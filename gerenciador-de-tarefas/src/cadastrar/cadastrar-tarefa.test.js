import React from 'react'
import ReactDOM from 'react-dom'
import CadastrarTarefa from './cadastrar-tarefa'

describe('Teste do componente de cadastrar tarefa', () => {

    it('deve renderizar o componente sem erro', () => {
        const div = document.createElement('div')
        ReactDOM.render(<CadastrarTarefa />, div)
        ReactDOM.unmountComponentAtNode(div)
    } )
})