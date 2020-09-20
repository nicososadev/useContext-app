import React from 'react'
import '@testing-library/jest-dom'
import { mount, shallow } from 'enzyme'
import { ToDoApp } from '../../../components/08-useReducer/ToDoApp'
import { demoToDos } from '../../fixtures/demoToDos'
import { act } from '@testing-library/react'

describe('Pruebas en el componente ToDoApp', () => {
    
    const wrapper = shallow( <ToDoApp />)

    Storage.prototype.setItem = jest.fn()

    test('Debe mostrarse correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe agregar un toDo y guardarlo en localStorage', () => {
        
        const wrapper = mount( <ToDoApp />)

        act( () => {
            
            const handleAddFunction = wrapper.find('ToDoAdd').prop('handleAdd')

            handleAddFunction( demoToDos[0] )
            handleAddFunction( demoToDos[1] )
        })

        const titleCounter = wrapper.find('h2').text().trim()

        expect( titleCounter ).toBe( 'ToDo List - 2' )

        expect( localStorage.setItem ).toHaveBeenCalledTimes(2)
    })

    test('Debe borrar un toDo', () => {

        act( () => {
            
            const handleAddFunction = wrapper.find('ToDoAdd').prop('handleAdd')
            const handleAddDelete = wrapper.find('ToDoList').prop('handleDelete')

            handleAddFunction( demoToDos[0] )
            handleAddDelete( demoToDos[0].id )
        })

        const titleCounter = wrapper.find('h2').text().trim()

        expect( titleCounter ).toBe( 'ToDo List - 0' )
    })
    
})
