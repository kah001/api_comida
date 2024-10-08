import con from "./connection.js";

export async function inserirComida(comida) {
    const comando = `
        INSERT INTO tb_comida (nm_comida, tp_comida, dt_validade, vl_preco, ds_setor, qtd_estoque, id_usuario)
            VALUES (?, ?, ?, ?, ?, ?, ?)
    `

    let registro = await con.query(comando, [comida.nome, comida.tipo, comida.validade, comida.preco, comida.setor, comida.estoque, comida.usuario])
    let info = registro[0]

    return info.insertId;
}

export async function consultarComida() {
    const comando = `
        SELECT id_comida            id,
                nm_comida           nome, 
                tp_comida           tipo,
                dt_validade         validade,
                vl_preco            preco,
                ds_setor            setor,
                qtd_estoque         estoque,
                id_usuario          usuario
            FROM tb_comida
    `

    let registro = await con.query(comando)
    let info = registro[0]

    return info
}

export async function consultarComidaId(id) {
    const comando = `
        SELECT id_comida       id,
                nm_comida      nome, 
                tp_comida      tipo,
                dt_validade    validade,
                vl_preco       preco,
                ds_setor       setor,
                qtd_estoque    estoque,
                id_usuario     usuario
            FROM tb_comida
            WHERE id_comida = ?
    `

    let registro = await con.query(comando, [id])
    let info = registro[0]
    
    return info
}

export async function alterarComida(comida, id) {
    const comando = `
        UPDATE tb_comida
            SET nm_comida = ?, 
                tp_comida = ?, 
                dt_validade = ?, 
                vl_preco = ?, 
                ds_setor = ?, 
                qtd_estoque = ?,
                id_usuario = ?
            WHERE id_comida = ?
    `

    let registro = await con.query (comando, [comida.nome, comida.tipo, comida.validade, comida.preco, comida.setor, comida.estoque, comida.usuario, id])
    let info = registro[0]

    return info.affectedRows
}

export async function deletarComida(id) {
    const comando = `
        DELETE FROM tb_comida
            WHERE id_comida = ?
    `

    let registro = await con.query (comando, [id])
    let info = registro[0]

    return info.affectedRows
}
