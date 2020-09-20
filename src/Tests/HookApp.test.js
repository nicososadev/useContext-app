import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { HooksApp } from '../HooksApp'

describe('Pruebas en componente HookApp', () => {
    
    test('El componente debe mostrarse correctamente', () => {
        
        const wrapper = shallow(<HooksApp />)

        expect( wrapper ).toMatchSnapshot()
    })
    
})
