import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { RealRef } from '../../../components/04-useRef/RealRef'


describe('Pruebas en el componente RealRef', () => {
    
    const wrapper = shallow( <RealRef />)

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe mostrar el componente MultipleHooks', () => {

        wrapper.find('button').simulate('click')
        
        expect( wrapper.find('MultipleHooks').exists() ).toBe( true )
    })
    
    
})
