import '@testing-library/jest-dom'
import React from 'react'
import { shallow } from 'enzyme'
import { MultipleHooks } from '../../../components/03-examples/MultipleHooks'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


describe('Pruebas en el componente MultipleHooks', () => {

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })

    test('Debe mostrarse correctamente', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow( <MultipleHooks /> )

        expect(wrapper).toMatchSnapshot()
    })
   
    test('Debe mostrar la informaccion correctamente ', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Nicolas',
                quote: 'Holis'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow( <MultipleHooks /> )

        expect( wrapper.find('.alert').exists() ).toBe( false )
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Holis' )
        expect( wrapper.find('.blockquote-footer').text().trim() ).toBe( 'Nicolas' )
    })
    
})
