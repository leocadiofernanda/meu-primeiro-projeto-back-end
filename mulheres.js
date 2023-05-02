const express = require("express")
const router = express.Router()
const app = express()
const porta = 3333


const mulheres = [
    {
        nome:'Simara Conceição',
        imagem:'111667035.jpg',
        minibio: 'Estudante de Arq e Desenvolvimento web'
    },
    {
        nome:'Iana Shan',
        imagem:'fegrthtyrjhty',
        minibio:'Fundadora da programaria'
    },
    {
        nome:'Nina da Hora',
        imagem:'fewfgertgrt',
        minibio:'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)