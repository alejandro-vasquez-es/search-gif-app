import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        setInputValue(e.target.value);

        console.log('Input changed');
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('Handle submit');
        if(inputValue.trim().length > 2){
            setCategories((categs => [inputValue,...categs]));
            setInputValue('')
        }
    }   

    return ( 
        <form onSubmit = {handleSubmit}>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
                placeholder = 'Search your gif collection...'
            />
        </form>
    )
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}