import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GifExpertApp = () => {
     const [categorias, setCategorias] = useState([ 'One punch']);

    // const handleAdd = () => {
    //     setCategorias([...categorias,'HunterXhunter']) 
    //     console.log(categorias);
    // }

    return (
        <div>
            <h2>Gift expert APP</h2>
            <hr/>
            <AddCategory setCategorias= {setCategorias}/>
            {/* <button onClick={handleAdd} >Agregar</button> */}
            <ol>
                {
                    categorias.map( category => (
                        <GiftGrid 
                        key={ category }
                        category= { category } />
                    ))
                }
            </ol>

        </div>
    )
}
