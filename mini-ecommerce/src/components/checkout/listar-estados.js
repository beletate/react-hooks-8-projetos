import React from 'react'

function ListarEstados() {

    const estados = [
        { 'sigla': 'MG', 'nome': 'Minas Gerais (MG)' },
        { 'sigla': 'SP', 'nome': 'São Paulo (SP)' },
        { 'sigla': 'TO', 'nome': 'Tocantins (TO)' }
    ]

    return estados.map(estado =>
        <option
            key={estado.sigla}
            value={estado.sigla}
            data-testid={estado.sigla}>
                {estado.nome}
            </option>
    )

}

export default ListarEstados