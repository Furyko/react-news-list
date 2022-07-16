import React, { useContext } from 'react';
import './SearchBar.css';
import { SearchContext } from '../../contexts/SearchContext';

function SearchBar() {
    const state = useContext(SearchContext)
    function onSubmit(e) {
        e.preventDefault();
        state.setContext({...state.context, search: e.target.search.value})
    }
    function onChange(e) {
        const buttonElement = document.getElementById('search-button')
        if (e.target.value.length > 2) {
            buttonElement.disabled = false
        } else {
            buttonElement.disabled = true
        }
    }
    return (
        <div className='search-bar-container'>
            <form onSubmit={onSubmit}>
                <input 
                type='text' 
                name='search' 
                placeholder='Introduzca una busqueda (ej: bitcoin)' 
                className='search-input'
                onChange={onChange}/>
                <input type='submit' value='Buscar' className='search-button' id='search-button' disabled/>
            </form>
        </div>
    )
}

export default SearchBar;