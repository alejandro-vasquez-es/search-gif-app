import React from 'react';
import { shallow } from 'enzyme';
import { GifCollection } from "../../components/GifCollection.js";
import { useFetchGifs } from '../../hooks/useFetchGifs.js';
import '@testing-library/jest-dom';

jest.mock('../../hooks/useFetchGifs.js')


describe('< GifCollection /> tests', ()=>{

    const category = 'Slipknot';
    
    test('should match snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        
        const wrapper = shallow( < GifCollection category = {category}/>)
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('should show items when the images are loaded from useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/imagenes/img.jpg',
            title: 'Anything'
        }, {
            id: '123',
            url: 'https://localhost/imagenes/img.jpg',
            title: 'Anything'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( < GifCollection category = {category}/>)
        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifCollectionItem').exists() ).toBe(true)
        expect( wrapper.find('GifCollectionItem').length ).toBe( gifs.length )

    })
    
    

})