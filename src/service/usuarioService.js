import * as db from '../repository/usuarioRepository.js'

export async function inserirUsuarioService(usuario) {
    let id = await db.inserirUsuario(usuario)

    return id
}

export async function consultarUsuarioService() {
    let registros = await db.consultarUsuario()

    return registros
}