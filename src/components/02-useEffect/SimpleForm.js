import React, { Fragment, useEffect, useState } from 'react'

import './effects.css'

import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    
    const { name, email } = formState

    useEffect( () => {
        console.log('Hola')
    }, [])

    useEffect( () => {
        console.log('Form Cambio')
    }, [formState])

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value

        })
    }

    return (
        <Fragment>
            <h1>UseEffect</h1>
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
                    type="text"
                    name="email"
                    placeholder="email@email.com"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name && <Message />}

        </Fragment>
    )
}
