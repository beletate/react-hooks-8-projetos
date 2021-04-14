import './gerenciador-tarefas.css';
import { useRoutes } from 'hookrouter';
import ListarTarefas from './listar/listar-tarefas'
import CadastrarTarefa from './cadastrar/cadastrar-tarefa'
import AtualizarTarefa from './atualizar/atualizar-tarefa'


// Definindo as rotas da aplicação, em objeto.
const routes = {
  '/': () => <ListarTarefas />,
  '/cadastrar': () => <CadastrarTarefa />,
  '/atualizar/:id': ({ id }) => <AtualizarTarefa id={id} />
};


function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
