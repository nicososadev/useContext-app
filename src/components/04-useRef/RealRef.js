import React, { useState } from 'react'
import { MultipleHooks } from '../03-examples/MultipleHooks'

import '../02-useEffect/effects.css'

export const RealRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>Caso de uso de useRef</h1>
            <hr/>

            { show && <MultipleHooks /> }

            <button 
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow( !show )
                }}
            > Mostrar/Ocultar </button>
        </div>
    )
}
