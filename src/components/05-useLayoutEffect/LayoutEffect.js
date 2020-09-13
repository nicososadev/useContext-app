import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1)

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)

    const { quote } = !!data && data[0]

    const p = useRef()

    useLayoutEffect( () => {

        console.log( p.current.getBoundingClientRect() )

    }, [quote])

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <h3>Layout Effect</h3>
            <hr/>

            <blockquote className="blockquote text-right">
                <p ref={ p } className="mb-0">{ quote }</p>
            </blockquote>
             
            <button onClick={ increment } className="btn btn-primary">Dame otra frase!</button>

        </div>
    )
}