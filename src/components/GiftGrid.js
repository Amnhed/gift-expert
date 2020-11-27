import React, { useEffect, useState } from 'react'
import { GiftGridItem } from './GiftGridItem'

export const GiftGrid = ({ category }) => {
    const [count, setCount] = useState(0)
    const [images, setImages] = useState([])
    useEffect( () => {
        getGifts();
    }, [])

    const getGifts = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=2NMy339jwalv3vY8Xay0IOM2RbxQQUfA`
        const respuesta = await fetch( url )
        const {data} = await respuesta.json();
        console.log(data);
        const gifs = data.map( img => {
                return {
                    id: img.id,
                    title: img.title,
                    url: img.images?.downsized_medium.url
                }
            })
        console.table(gifs)
        setImages(gifs)
    }



    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                

                {
                    images.map((img) => (
                        <GiftGridItem 
                        key= { img.id } 
                        { ...img } /> // {...img} asi envio las propiedad. como si fuera una propiedad independiente
                    ))
                }

                <div>{ count }</div>


                <button onClick= { ()=> setCount( count +1 ) }>Incrementar</button>
            </div>
        </>
    )
}
