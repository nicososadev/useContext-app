import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { ToDoListItem } from '../../../components/08-useReducer/ToDoListItem'
import { demoToDos } from '../../fixtures/demoToDos'

describe('Pruebas en el componente ToDoListItem', () => {

    const handleComplete = jest.fn()
    const handleDelete = jest.fn()
    
    const index = 0

    const wrapper = shallow( 
        <ToDoListItem 
            toDo={ demoToDos[0] } 
            index={ index } 
            handleComplete={ handleComplete } 
            handleDelete={ handleDelete } 
        /> 
    )

    test('Debe mostrarse correctamente el componente', () => {

        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click')

        expect( handleDelete ).toHaveBeenCalledWith( demoToDos[0].id )
    })
    
    test('Debe llamar la funcion handleComplete', () => {

        wrapper.find('p').simulate('click')

        expect( handleComplete ).toHaveBeenCalledWith( demoToDos[0].id )
    })

    test('Debe mostrar el texto correctamente', () => {

        const parrafo = wrapper.find('p').text().trim()

        expect( parrafo ).toBe( `${ index + 1 }. ${ demoToDos[0].desc }` )
        
    })

    test('La descripcion debe mostrarse tachada con la clase complete', () => {
        
        const toDo = {
            id:3,
            desc: 'tarea completada',
            done: true
        }

        const wrapper = shallow( 
            <ToDoListItem 
                toDo={ toDo } 
                index={ index } 
                handleComplete={ handleComplete } 
                handleDelete={ handleDelete } 
            /> 
        )

        const parrafo = wrapper.find('p')

        expect( parrafo.hasClass('complete') ).toBe( true )
    })
    
    
})
