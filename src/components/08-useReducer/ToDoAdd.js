import React, { Fragment } from 'react'
import { useForm } from '../../hooks/useForm'

export const ToDoAdd = ({ handleAdd }) => {

    const [{ description }, handleInputChange, cleanInput] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description === '') {
            return;
        }

        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAdd(newToDo)

        cleanInput()
    }

    return (
        <Fragment>
            <h4>Agregar ToDo</h4>
            <hr />

            <form onSubmit={handleSubmit} >
                <input type="text" className="form-control" onChange={handleInputChange} name="description" value={description} placeholder="Nueva Tarea" />
                <button type="submit" className="btn btn-outline-primary mt-3 btn-block">Agregar</button>
            </form>
        </Fragment>
    )
}
