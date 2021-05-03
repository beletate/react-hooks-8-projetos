import { render, screen } from '@testing-library/react';
import Upload from './upload';

test('deveve renderizar o componente com sucesso', () => {
  render(<Upload />);
  const linkElement = screen.getByText(/Upload de imagens/i);
  expect(linkElement).toBeInTheDocument();
});
