import { useState } from "react";
import {PropTypes} from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        
        event.preventDefault();

        //Evalua si tiene mas de un caracter, si no cumple, sale de la funcion
        if (inputValue.trim().length <= 1) return;

        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
