import React, { useContext } from 'react'
import { userContext } from './UserContext'

export const LoginPage = () => {

    const { setUser } = useContext(userContext)

    return (

        <div>
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 1,
                    name: 'Nicolas'
                })}
            >
                Login
            </button>
        </div>
    )
}
