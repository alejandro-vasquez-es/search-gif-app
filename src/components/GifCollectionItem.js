import React from 'react'

export const GifCollectionItem = ( {id, title, url} ) => {


    return (
        <div className="card  animate__animated animate__fadeIn">
            <img alt={title} src={url} />
            <p>{ title }</p>
        </div>
    )
}
