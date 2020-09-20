import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { ToDoAdd } from '../../../components/08-useReducer/ToDoAdd'

describe('Pruebas en el componente ToDoAdd', () => {

    const handleAdd = jest.fn()

    const wrapper = shallow( 
        <ToDoAdd 
            handleAdd={ handleAdd }
        /> 
    )

    test('Debe mostrarse correctamente ', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('No debe llamar la funcion handleAdd', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault(){} })

        expect( handleAdd ).not.toHaveBeenCalled()
    })
    
    test('Debe llamar la funcion handleAdd', () => {

        const value = 'Tarea'

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({ preventDefault(){} })

        expect( handleAdd ).toHaveBeenCalled()
        expect( handleAdd ).toHaveBeenCalledWith( expect.any(Object) )
        expect( handleAdd ).toHaveBeenCalledWith({
            desc: value,
            done: false,
            id: expect.any(Number)
        })

        expect( wrapper.find('input').prop('value') ).toBe( '' )
    })
})
