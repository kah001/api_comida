import comidaController from './controller/comidaController.js'
import usuarioController from './controller/usuarioController.js'


export default function adicionarRotas(servidor) {
    servidor.use(comidaController)
    servidor.use(usuarioController)
}
