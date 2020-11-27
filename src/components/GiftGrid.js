import React from 'react'

export const GiftGrid = ({ category }) => {

    const getGifts = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and morty&limit=10&api_key=2NMy339jwalv3vY8Xay0IOM2RbxQQUfA'
        const respuesta = await fetch( url )
        const {data} = await respuesta.json();
        console.log(data);
        const gifs = data.map( img => {
                return {
                    id: img.id,
                    title: img.title,
                    image: img.images?.downsized_medium.url
                }
            })
        console.table(gifs)
    }

    getGifts();

    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
