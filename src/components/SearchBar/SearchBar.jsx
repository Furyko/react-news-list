import React from 'react';
import './SearchBar.css';

function SearchBar() {
    function onSubmit(e) {
        e.preventDefault();
        alert(e.target.search.value);
    }
    return (
        <div className='search-bar-container'>
            <form onSubmit={onSubmit}>
                <input type='text' name='search' placeholder='Introduzca una busqueda (ej: bitcoin)' className='search-input'/>
                <input type='submit' value='Buscar' className='search-button'/>
            </form>
        </div>
    )
}

export default SearchBar;