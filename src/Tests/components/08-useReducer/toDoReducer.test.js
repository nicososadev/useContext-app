import React from 'react'
import '@testing-library/jest-dom'
import { toDoReducer } from '../../../components/08-useReducer/toDoReducer'
import { demoToDos } from '../../fixtures/demoToDos'

describe('Pruebas en el componente toDoReducer', () => {
    
    test('Debe retornar el estado por defecto', () => {
        
        const state = toDoReducer( demoToDos, {})

        expect( state ).toEqual( demoToDos )
    })

    test('Debe agregar un toDo', () => {
        
        const newToDo = {
            id: 3,
            desc: 'prueba3',
            done: false
        }

        const action = {
            type: 'add',
            payload: newToDo
        }

        const state = toDoReducer( demoToDos, action )

        expect( state.length ).toBe( 3 )
        expect( state ).toEqual( [...demoToDos, newToDo] )
    })

    test('Debe eliminar un toDo', () => {
        
        const idToDo = 2

        const action = {
            type: 'delete',
            payload: idToDo
        }

        const state = toDoReducer( demoToDos, action )

        expect( state.length ).toBe( 1 )
        expect( state ).toEqual( [ demoToDos[0] ] )
    })

    test('Debe marcar como completado un toDo', () => {
        
        const idToDo = 2

        const action = {
            type: 'complete',
            payload: idToDo
        }

        const state = toDoReducer( demoToDos, action )

        expect( state[1].done ).toBe( true )
        expect( state[0] ).toEqual( demoToDos[0] )
    })
    
    
})
