import React from 'react'

export const ToDoListItem = ({ toDo, index, handleComplete, handleDelete  }) => {

    return (
        <li className="list-group-item" key={toDo.id}>
            <p onClick={() => handleComplete(toDo.id)} className={`${toDo.done && 'complete'}`}>{index + 1}. {toDo.desc}</p>
            <button onClick={() => handleDelete(toDo.id)} className="btn btn-success">Termiada</button>
        </li>
    )
}
