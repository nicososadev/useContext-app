import React from 'react'
import { ToDoListItem } from './ToDoListItem'


export const ToDoList = ({ toDos, handleComplete, handleDelete }) => {

    return (

        <ul className="list-group list-group-flush">
            {
                toDos.map((toDo, i) => (
                    <ToDoListItem toDo={ toDo } key={ toDo.id } index={ i } handleComplete={ handleComplete } handleDelete={ handleDelete }/>
                ))
            }
        </ul>
    )
}
