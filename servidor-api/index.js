const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const {
    listarTarefaId,
    listarTarefas,
    cadastrarTarefa,
    atualizarTarefa,
    removerTarefa,
    concluirTarefa
} = require('./controllers/gerenciador-tarefas')

const { 
    finalizarCompra,
    obterCidadesPorEstado
 } = require('./controllers/mini-ecommerce')

const upload = require('./controllers/upload')

const app = express()
const port = 3001

app.use(express.static('public'))
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload({ createParentPath: true }))

app.get('/gerenciador-tarefas', listarTarefas)

app.get('/gerenciador-tarefas/:id', listarTarefaId)

app.post('/gerenciador-tarefas', cadastrarTarefa)

app.put('/gerenciador-tarefas/:id', atualizarTarefa)

app.delete('/gerenciador-tarefas/:id', removerTarefa)

app.put('/gerenciador-tarefas/:id/concluir', concluirTarefa)


// mini-ecommerce
app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra)
app.get('/mini-ecommerce/estado/:siglaEstado/cidades', obterCidadesPorEstado)

// upload image
app.post('/upload', upload)



app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`))