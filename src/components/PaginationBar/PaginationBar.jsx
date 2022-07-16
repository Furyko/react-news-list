import React, { useContext } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import './PaginationBar.css';

function PaginationBar() {
    const state = useContext(SearchContext)
    return (
        <div className='pagination-container'>
            { state.context.page !== 1 &&
            <>
                <button onClick={() => {state.setContext({...state.context, page: state.context.page - 1})}}>
                    ←
                </button>
                <button onClick={() => {state.setState({...state.context, page: state.context.page - 1})}}>
                    { state.context.page - 1 }
                </button>
            </>
            }
            <button>{ state.context.page }</button>
            <button onClick={() => {state.setContext({...state.context, page: state.context.page + 1})}}>
                { state.context.page + 1 }
            </button>
            <button onClick={() => {state.setContext({...state.context, page: state.context.page + 1})}}>
                →
            </button>
        </div>
    )
}

export default PaginationBar;