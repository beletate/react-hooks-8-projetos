const uuid = require('uuid')

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

module.exports = {
    listarTarefaId,
    listarTarefas
}