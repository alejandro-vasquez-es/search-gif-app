import React from 'react';
import { shallow } from "enzyme";
import { GifCollectionItem } from "../../components/GifCollectionItem.js";

describe('<GifCollectionItem/> tests', () => {

    const url = 'https://localhost/algo.jpg';
    const title = 'regresa el tiempo y vuelve';
    const wrapper = shallow( < GifCollectionItem url = { url } title = { title } /> );

    test('should show correctly the component', () => {

        expect( wrapper ).toMatchSnapshot();

    });


    test('should have a paragraph with the title', () => {
        
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( title )

    })

    test('should have the image with the url and alt attributes from the props', () => {

        const img = wrapper.find('img');
        // console.log( img.props() )
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    })
    
    test('should have animated fadeIn class', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );

    })
    
    
    
});