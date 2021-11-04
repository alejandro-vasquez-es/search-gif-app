import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from "../../src/GifExpertApp.js";
import '@testing-library/jest-dom';

describe('<GifexpertApp/> tests', () => {

    test('should match snapshot', () => {

        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot()
        
    });
    
    test('should have components', () => {
        
        const categories = ['Venom', 'Godzilla']
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories }/>);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifCollection').length ).toBe( categories.length );

    })
    
    
})
