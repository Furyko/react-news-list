import React from 'react';
import './NewCard.css';
import { DateTime } from 'luxon';

function NewCard({ article }) {
    const date = DateTime.fromISO(article.publishedAt)
    return (
        <div className='card'>
            <a href={ article.url } target='_blank' rel='noreferrer'>
                <div className='card-info'>
                    <span>{ article.source.name }</span>
                    <h3>{ article.title }</h3>
                    <p>{ article.description }</p>
                    <p>Publicado el: { date.day }-{ date.month }-{ date.year } a las {date.hour}:{date.minute} hs</p>
                </div>
                <div className='card-image'>
                    <img src={ article.urlToImage } alt='No es posible cargar la imagen.'/>
                </div>
            </a>
        </div>
    )
}

export default NewCard;