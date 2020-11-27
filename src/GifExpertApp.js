import React, { useState } from 'react'

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['Dragon Ball', 'One punch']);

    const handleAdd = () => {
        setCategorias([...categorias,'HunterXhunter']) 
        console.log(categorias);
    }

    return (
        <div>
            <h2>Gift expert APP</h2>
            <hr/>
            <button onClick={handleAdd} >Agregar</button>
            <ol>
                {
                    categorias.map( category => {
                    return <li key={category}>{ category }</li>
                    })
                }
            </ol>

        </div>
    )
}
