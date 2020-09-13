import React from 'react'

// Memo evalua si hay cambios en value para determinar si se renderiza el componente o no

export const Small = React.memo(( { value } ) => {

    console.log('Me volviste a llamar :)')

    return (
        <small>{ value }</small>
    )
})
