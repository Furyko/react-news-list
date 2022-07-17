import React from 'react';
import './NotFoundPage.css';

function NotFoundPage() {
    return (
        <div className='not-found-card-container'>
            <div className='not-found-card'>
                <h1>404</h1>
                <h2>Not found</h2>
                <h3>Recurso no encontrado :(</h3>
                <a href='/'><button className='not-found-button rounded-border'>Volver al inicio</button></a>
            </div>
        </div>
    )
}

export default NotFoundPage;