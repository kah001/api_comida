import comidaController from './controller/comidaController.js'


export default function adicionarRotas(servidor) {
    servidor.use(comidaController)
}
