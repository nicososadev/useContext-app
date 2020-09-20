import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true)

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect( () => {

        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect( () => {

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                if( isMounted.current ){
                    setState({
                        data: data,
                        loading: false,
                        error: null
                    })
                }   
            })
            .catch( () => {
                setState({
                    data:null,
                    loading: false,
                    error: 'No se pudo cargar los datos'
                })
            })

    }, [ url ])

    return state
}
