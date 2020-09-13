import React, { Fragment } from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterCustomHook = () => {

    const { state:counter, reset, increment, decrement } = useCounter(50)

    return (
        <Fragment>
            <h1>Counter con Custom Hook: { counter }</h1>
            <hr/>
            <button onClick={ increment } className="btn btn-success">+1</button>
            <button onClick={ reset } className="btn btn-success">Reset</button>
            <button onClick={ decrement } className="btn btn-success">-1</button>
        </Fragment>
    )
}
