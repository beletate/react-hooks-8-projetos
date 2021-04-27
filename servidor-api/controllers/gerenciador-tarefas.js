const uuid = require('uuid').v4

let tarefas = [
    {
        id: '1',
        nome: 'Aprender React',
        concluida: true
    },
    {
        id: '2',
        nome: 'Estudar padroes de projetos',
        concluida: false
    },
    {
        id: '3',
        nome: 'Aprender JavaScript',
        concluida: false
    },
    {
        id: '4',
        nome: 'Estudar React usando hooks',
        concluida: false
    }
]

function listarTarefaId(req, res) {
    const id = req.params.id
    const tarefa = tarefas.filter(tarefa => tarefa.id === id)
    if (tarefa.length === 0) {
        res.status(404).json({ erro: 'Tarefa não encontrada.' })
    }

    res.json(tarefa[0])
}

function listarTarefas(req, res) {
    const pagina = req.query['pag'] || 1
    const ordem = req.query['ordem']
    const filtroTarefa = req.query['filtro-tarefa']
    const itensPorPagina = req.query['itens-por-pagina'] || 3
    let tarefasRetornar = tarefas.slice(0)

    // Filtrar
    if (filtroTarefa) {
        tarefasRetornar = tarefasRetornar.filter(
            tarefa => tarefa.nome.toLowerCase().indexOf(filtroTarefa.toLowerCase()) === 0)
    }

    // Ordenar
    if (ordem === 'ASC') {
        tarefasRetornar.sort((tarefa1, tarefa2) => (tarefa1.nome.toLowerCase() > tarefa2.nome.toLowerCase()) ? 1 : -1)
    } else if (ordem === 'DESC') {
        tarefasRetornar.sort((tarefa1, tarefa2) => (tarefa1.nome.toLowerCase() < tarefa2.nome.toLowerCase()) ? 1 : -1)
    }

    // Retornar
    res.json({
        totalItens: tarefasRetornar.length,
        tarefas: tarefasRetornar.slice(0).splice((pagina - 1) * itensPorPagina, itensPorPagina),
        pagina: pagina
    })
}

function cadastrarTarefa(req, res) {
    if (!req.body['nome'] && !req.body['concluida']) {
        res.status(400).json({ erro: 'Requisicao invalida.' })
    }

    const tarefa = {
        id: uuid(),
        nome: req.body['nome'],
        concluida: req.body['concluida']
    }

    tarefas.push(tarefa)
    res.json(tarefa)
}

function atualizarTarefa(req, res) {
    if (!req.body['nome'] && !req.body['concluida']) {
        res.status(400).json({ erro: 'Requisicao invalida.' })
    }

    const id = req.params.id
    let tarefaAtualizada = false

    tarefas = tarefas.map(tarefa => {
        if (tarefa.id === id) {
            tarefa.nome = req.body['nome']
            tarefa.concluida = req.body['concluida']
            tarefaAtualizada = true
        }
        return tarefa
    })

    if (!tarefaAtualizada) {
        res.status(404).json({ erro: 'Tarefa nao encontrada.' })
    }

    res.json({
        id: id,
        nome: req.body['nome'],
        concluida: req.body['concluida']
    })
}

module.exports = {
    listarTarefaId,
    listarTarefas,
    cadastrarTarefa,
    atualizarTarefa
}