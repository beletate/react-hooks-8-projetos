import React from 'react'
import { render } from '@testing-library/react'
import Menu from './menu'

describe('Teste do componente de menu', () => {

    it('deve renderizar o component sem erros', () => {
        const { getByText } = render(
        <Menu 
            produtos={[]}
            handleExibirProdutos={() => false}
            handleExibirCheckout={() => false}/>
        )
        const texto = getByText(/mini ecommerce/i)
        expect(texto).toBeInTheDocument()
    })

})