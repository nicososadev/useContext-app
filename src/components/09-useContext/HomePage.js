import React, { useContext } from 'react'
import { userContext } from './UserContext'

export const HomePage = () => {

    const { user } = useContext(userContext)

    return (
        <div>
            <h1>Homepage</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
            
        </div>
    )
}
