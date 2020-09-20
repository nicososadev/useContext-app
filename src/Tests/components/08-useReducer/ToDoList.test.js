import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { ToDoList } from '../../../components/08-useReducer/ToDoList'
import { demoToDos } from '../../fixtures/demoToDos'

describe('Pruebas en el componente ToDoList', () => {
    
    const handleComplete = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow( 
        <ToDoList 
            toDos={ demoToDos }
            handleComplete={ handleComplete }
            handleDelete={ handleDelete }
        /> 
    )

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe mostrar dos ToDoListItems', () => {
        
        expect( wrapper.find('ToDoListItem').length ).toBe( demoToDos.length )
        expect( wrapper.find('ToDoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) )
    })
    
})
