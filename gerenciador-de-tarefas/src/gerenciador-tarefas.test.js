import { render, screen } from '@testing-library/react';
import GerenciadorTarefas from './gerenciador-tarefas';

test('renders learn react link', () => {
  render(<GerenciadorTarefas />);
  const linkElement = screen.getByText(/Gerenciador de Tarefas</i);
  expect(linkElement).toBeInTheDocument();
});
