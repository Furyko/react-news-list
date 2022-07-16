import React, { useContext } from 'react';
import { PageContext } from '../../contexts/PageContext';
import './PaginationBar.css';

function PaginationBar() {
    const pageState = useContext(PageContext)
    return (
        <div className='pagination-container'>
            <button onClick={() => {pageState.setPage(pageState.page - 1)}}>←</button>
            <button onClick={() => {pageState.setPage(pageState.page - 1)}}>{ pageState.page - 1 }</button>
            <button onClick={() => {pageState.setPage(2)}}>{ pageState.page }</button>
            <button onClick={() => {pageState.setPage(pageState.page + 1)}}>{ pageState.page + 1 }</button>
            <button onClick={() => {pageState.setPage(pageState.page + 1)}}>→</button>
        </div>
    )
}

export default PaginationBar;