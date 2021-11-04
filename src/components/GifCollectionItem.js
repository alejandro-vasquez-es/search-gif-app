import React from 'react'
import PropTypes from 'prop-types'


export const GifCollectionItem = ( {title, url} ) => {
    
    
    return (
        
        <div className="card animate__animated animate__fadeIn">
        <img alt={title} src={url} />
        <p>{ title }</p>
        </div>
        
        );
        
}
    
GifCollectionItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
    