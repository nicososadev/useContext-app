import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { AppRouter } from '../../../components/09-useContext/AppRouter'
import { userContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en el componente AppRouter', () => {
    
    const user = {
        id: 0,
        name: 'Prueba'
    }

    const wrapper = mount(
        <userContext.Provider value={{ user }}>

            <AppRouter />)

        </userContext.Provider>  
    )

    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })
    
})
