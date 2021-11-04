import { shallow } from "enzyme";
import '@testing-library/jest-dom';


import { AddCategory } from "../../components/AddCategory.js";
import React from 'react';

describe('tests in <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    })
    
    test('should show propertly', () => {
        
        expect( wrapper ).toMatchSnapshot();
        
    });
    
    test('should change the textbox', () => {
        
        const input = wrapper.find("input");
        const value = "Hola mundo";
        input.simulate("change", { target: { value } });
        const inputAfter = wrapper.find("input");
        expect(inputAfter.prop("value")).toBe(value);
        
    });
    
    test('should not post the information with the submit', () => {
        
        wrapper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();
        
    });
    
    test('should call setCategories and clear the textbox', () => {
        
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'Slipknot'}})

        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');

    })
    

})
