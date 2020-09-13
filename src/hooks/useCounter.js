import { useState } from "react"

export const useCounter = ( inicialState = 10 ) => {

    const [counter, setState] = useState( inicialState )

    const increment = () => {
        setState( counter + 1)
    }

    const decrement = () => {
        setState( counter - 1)
    }

    const reset = () => {
        setState( inicialState )
    }

    return { counter, reset, increment, decrement }
}
