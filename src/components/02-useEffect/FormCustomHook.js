import React from 'react'
import { useForm } from '../../hooks/useForm'

import './effects.css'


export const FormCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })
    
    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log( formValues )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="email@email.com"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}
