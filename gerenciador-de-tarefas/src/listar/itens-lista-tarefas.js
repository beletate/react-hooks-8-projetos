import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { A } from 'hookrouter'

function ItensListaTarefas(props){

    return (
        props.tarefas.map(tarefa =>
            <tr key={tarefa.id} data-testid="tarefa">
                <td width="75%" data-testid="nome-tarefa">
                    {tarefa.nome}
                </td>
                <td className="text-right">
                    <A href={"/atualizar/" + tarefa.di}
                    className={tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm'}>
                        <FontAwesomeIcon icon={faEdit}/>
                    </A>
                </td>
            </tr>
        )
    );

}

// Prover ambos atributos e valida-los.
ItensListaTarefas.PropTypes = {
    tarefas: PropTypes.array.isRequired,
    recarregarTarefas: PropTypes.func.isRequired
}

export default ItensListaTarefas