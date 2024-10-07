import con from './connection.js'

export async function inserirUsuario(usuario) {
    const comando = `
        INSERT INTO tb_usuario (nm_usuario, ds_senha) 
            VALUES (?, ?)
    `

    let registros = await con.query(comando, [usuario.nome, usuario.senha])
    let info = registros[0]

    return info.insertId
}

export async function consultarUsuario() {
    const comando = `
        SELECT id_usuario       id,
                nm_usuario      nome, 
                ds_senha        senha
            FROM tb_usuario
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info
}

export async function validarUsuario(usuario) {
    const comando = `
        SELECT id_usuario       id,
                nm_usuario      nome
            FROM tb_usuario
            WHERE nm_usuario = ? AND ds_senha = ?
    `

    let registros = await con.query(comando, [usuario.nome, usuario.senha])
    let info = registros[0][0]

    return info
}

