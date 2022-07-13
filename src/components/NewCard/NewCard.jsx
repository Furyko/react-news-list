import React from 'react';
import './NewCard.css';

function NewCard({ article }) {
    return (
        <div className='card'>
            <a href={ article.url }>
                <div className='card-info'>
                    <span>{ article.source.name }</span>
                    <h3>{ article.title }</h3>
                    <p>{ article.description }</p>
                    <p>{ article.publishedAt }</p>
                </div>
                <div className='card-image'>
                    <img src={ article.urlToImage } alt='No es posible cargar la imagen.'/>
                </div>
            </a>
        </div>
    )
}

export default NewCard;