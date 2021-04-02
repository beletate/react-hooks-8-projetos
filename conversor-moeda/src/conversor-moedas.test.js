import { screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'

describe('Teste do componente de conversao de moedas', () => {

  it('deve rendelizar o component sem erro', () => {
    render(<ConversorMoedas />);
    const linkElement = screen.getByText(/Conversor de Moedas/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('deve simular uma conversao de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />) 
    axiosMock.get.mockResolvedValueOnce({
      data: {success: true, rates: { BRL: 4.564292, USD: 1.101049}}
    })
    fireEvent.click(getByTestId('btn-converter'))
    const modal = await findByTestId('modal')
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD')
  })
})

