import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory.js';
import {GifCollection} from './components/GifCollection.js';

export const GifExpertApp = () => {

    // const categories = ['One punch man', 'Tokyo ghoul', 'Dragon Ball']
    const [categories, setCategories] = useState(['Sailor Moon']);

    return (
        <>
            <h2 className = ' animate__animated animate__fadeIn'>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => (
                        <GifCollection
                            category = {category}
                            key={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
