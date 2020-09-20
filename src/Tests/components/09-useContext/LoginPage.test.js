import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { LoginPage } from '../../../components/09-useContext/LoginPage'
import { userContext } from '../../../components/09-useContext/UserContext'

describe('Pruebas en el componente LoginPage', () => {

    const setUser = jest.fn()

    const wrapper = mount( 
        <userContext.Provider value={{ setUser }}>

            <LoginPage />)

        </userContext.Provider>
    )
    
    test('Debe mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('Debe llamar a la funcion setUser con su respectivo argumento', () => {
        
        const user = {
            id: 1,
            name: 'Nicolas'
        }

        wrapper.find('button').simulate('click')

        expect( setUser ).toHaveBeenCalledWith( user )

    })
    
})
