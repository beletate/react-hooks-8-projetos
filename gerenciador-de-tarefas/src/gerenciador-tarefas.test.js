import GerenciadorTarefas from './gerenciador-tarefas';
import ReactDOM from 'react-dom'

describe('Teste do componente gerenciador de tarefas', () => {
  it('deve renderizar o componente sem erro', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GerenciadorTarefas />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})