import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory.js';
import {GifCollection} from './components/GifCollection.js';

export const GifExpertApp = ( {defaultCategories = ['Sailor Moon'] } ) => {

    const [categories, setCategories] = useState( defaultCategories );

    return (
        <React.Fragment>
            <h2 className = 'animate__animated animate__fadeIn'>GifExpertApp</h2>
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
        </React.Fragment>
    )
}
