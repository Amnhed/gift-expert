import React, {useState} from 'react'

export const AddCategory = ({ setCategorias }) => {
    //prop.setCategories 
    const [inputValue, setInputValue] = useState('')

     const handleInputChange = (e)  => {
        setInputValue(e.target.value)
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         if( inputValue.trim().length > 2 ){
            console.log('Se envio el formulario');
            setCategorias( categorias => [...categorias, inputValue])
            setInputValue('')
        }
    }

    return (
        <form onSubmit= { handleSubmit }>
            
            <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange } 
            />

        </form>
    )
}
