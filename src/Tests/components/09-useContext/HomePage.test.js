import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { HomePage } from '../../../components/09-useContext/HomePage'
import { userContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en el componente HomePage', () => {
    
    const user = {
        id: 0,
        name: 'Prueba'
    }

    const wrapper = mount( 
        <userContext.Provider value={{ user }}>

            <HomePage />)

        </userContext.Provider>
    )

    test('Debe mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot()
    })
    
})
