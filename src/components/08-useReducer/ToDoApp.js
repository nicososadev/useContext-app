import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer'
import { ToDoList } from './ToDoList'
import { ToDoAdd } from './ToDoAdd'

import './styles.css'

const init = () => {

    return JSON.parse(localStorage.getItem('toDos')) || []
}

const initialState = []

export const ToDoApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos))
    }, [toDos])

    const handleAdd = (newToDo) => {

        const action = {
            type: 'add',
            payload: newToDo
        }

        dispatch(action)
    }

    const handleDelete = (toDoId) => {

        const action = {
            type: 'delete',
            payload: toDoId
        }

        dispatch(action)
    }

    const handleComplete = (toDoId) => {

        const action = {
            type: 'complete',
            payload: toDoId
        }

        dispatch(action)
    }

    return (
        <div>
            <h1>ToDo App</h1>
            <hr />

            <h2>ToDo List - {toDos.length}</h2>

            <div className="row">
                <div className="col-7">
                    <ToDoList toDos={toDos} handleComplete={handleComplete} handleDelete={handleDelete} />
                </div>

                <div className="col-5">
                    <ToDoAdd handleAdd={handleAdd} />
                </div>
            </div>
        </div>
    )
}
