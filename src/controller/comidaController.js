import { Router } from "express"

import * as service from '../service/comidaService.js'
const endpoints = Router()


endpoints.post('/comida', async (req, resp) => {
    try {
        let comida = req.body
        let id = await service.inserirComidaService(comida)

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/comida', async (req, resp) => {
    try {
        let registros = await service.consultarComidaService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/comida/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let registros = await service.consultarComidaIdService(id)

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/comida/:id', async (req, resp) => {
    try {
        let comida = req.body
        let id = req.params.id
        await service.alterarComidaService(comida, id)

        resp.send()
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/comida/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await service.deletarComidaService(id)

        if (linhasAfetadas >= 1) {
            resp.send()
        } else {
            resp.send('Nenhum registro encontrado')
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints
