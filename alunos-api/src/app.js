const express = require('express')
const app = express()
const cors = require('cors')

const alunos = [
    {
        nome: 'Alisson',
        idade: 12
    },
    {
        nome: 'Aluno2',
        idade: 13
    },
    {
        nome: 'Aluno3',
        idade: 14
    },
    {
        nome: 'Aluno4',
        idade: 15
    },
    {
        nome: 'Aluno5',
        idade: 16
    },
    {
        nome: 'Aluno6',
        idade: 17
    },
    {
        nome: 'Aluno7',
        idade: 18
    },
    {
        nome: 'Aluno8',
        idade: 19
    },
]
app.use(cors())
app.get('/api/v1/alunos', function (req, res) {
    res.send(alunos)
})

app.listen(3000)