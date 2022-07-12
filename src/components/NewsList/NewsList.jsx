import React from 'react';
import { useEffect, useState, useContext } from 'react';
import NewCard from '../NewCard/NewCard';
import './NewsList.css';
import { SearchContext } from '../../contexts/SearchContext';

function NewsList() {
    const state = useContext(SearchContext)
    const apiKey = 'd751ad452b2646ca96892d86f2931b9a'
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (state.search) {
            setLoading(true)
            fetch(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${state.search}&pageSize=10&language=es`)
            .then(res => res.json())
            .then(data => {
                setArticles(data);
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
        }
    }, [state])
    return (
        <div className='cards-container'>
            { articles.totalResults &&
            <span className='results-total'>Está viendo 10 noticias de {articles.totalResults} resultados</span>
            }
            { loading ? 
                <div className='loading-feedback'>
                    <div className='loading-animation'></div>
                </div> : 
            articles.articles && articles.articles.map((item, index) => (
                <NewCard article={item} key={index}/>
            ))}
        </div>
    )
}

export default NewsList;