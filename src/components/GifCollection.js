import React from 'react'
import PropTypes from 'prop-types'
import { GifCollectionItem } from './GifCollectionItem.js';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifCollection = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>

            {loading && <p className = ' animate__animated animate__flash'>Loading...</p>}

            <div className='card-collection'>
                {
                    images.map((gift ) =>(
                        <GifCollectionItem
                            key = { gift.id }
                            {...gift}
                        />
                ))}
            </div>
        </>
    )
}

GifCollection.propTypes = {
    category: PropTypes.string.isRequired
}

