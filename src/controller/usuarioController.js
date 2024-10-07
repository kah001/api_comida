import * as service from '../service/usuarioService.js'
import { Router } from 'express'
const endpoints = Router()

endpoints.post('/comida/usuario', async (req, resp) => {
    try {
        let usuario = req.body
        let id = await service.inserirUsuarioService(usuario)

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

endpoints.get('/comida/usuario', async (req, resp) => {
    try {
        let registros = await service.consultarUsuarioService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints