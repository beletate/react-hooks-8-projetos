const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {
    listarTarefaId,
    listarTarefas,
    cadastrarTarefa,
    atualizarTarefa
} = require('./controllers/gerenciador-tarefas')

const app = express()
const port = 3001


app.use(cors())
app.use(bodyParser.json())

// CRUD

function naoImplementado(req, res) {
    res.status(501).json({ erro: 'Não implementado.' })
}


app.get('/gerenciador-tarefas', listarTarefas)

app.get('/gerenciador-tarefas/:id', listarTarefaId)

app.post('/gerenciador-tarefas', cadastrarTarefa)

app.put('/gerenciador-tarefas/:id', atualizarTarefa)

app.delete('/gerenciador-tarefas/:id', naoImplementado)

app.put('/gerenciador-tarefas/:id/concluir', naoImplementado)



app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`))