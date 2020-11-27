import React from 'react'

export const GiftGridItem = ({ id, title, url }) => {

    console.log(id, url);

    return (
        <div>
            <img src= { url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
