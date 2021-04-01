import { render, screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

it('deve checar o titulo do component', () => {
  render(<ConversorMoedas />);
  const linkElement = screen.getByText(/Conversor de Moedas/i);
  expect(linkElement).toBeInTheDocument();
});
