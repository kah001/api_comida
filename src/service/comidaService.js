import * as db from '../repository/comidaRepository.js'

export async function inserirComidaService(comida) {
    let id = db.inserirComida(comida)

    return id
}

export async function consultarComidaService() {
    let registros = db.consultarComida()

    return registros
}

export async function consultarComidaIdService(id) {
    let registros = await db.consultarComidaId(id)

    return registros
}


export async function alterarComidaService(comida, id) {
    let linhasAfetadas = db.alterarComida(comida, id)

    return linhasAfetadas
}

export async function deletarComidaService(id) {
    let linhasAfetadas = db.deletarComida(id)

    return linhasAfetadas
}
