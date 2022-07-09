import React from 'react';
import { useEffect, useState } from 'react';
import NewCard from '../NewCard/NewCard';
import './NewsList.css';

function NewsList() {
    const apiKey = 'd751ad452b2646ca96892d86f2931b9a'
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=bitcoin&pageSize=10&language=es`)
        .then(res => res.json())
        .then(data => setArticles(data))
    }, [])
    return (
        <div className='cards-container'>
            {articles.totalResults &&
            <span className='results-total'>Está viendo 10 noticias de {articles.totalResults} resultados</span>
            }
            {articles.articles && articles.articles.map((item, index) => (
                <NewCard article={item} key={index}/>
            ))}
        </div>
    )
}

export default NewsList;