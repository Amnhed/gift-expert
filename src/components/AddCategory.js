import React, {useState} from 'react'

export const AddCategory = () => {
     const [inputValue, setInputValue] = useState('')

     const handleInputChange = (e)  => {
        setInputValue(e.target.value)
     }

     const handleSubmit = (e) => {
         e.preventDefault();
         console.log('Se envio el formulario');
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
