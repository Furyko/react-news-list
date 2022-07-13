import React from 'react';
import { useEffect, useState, useContext } from 'react';
import NewCard from '../NewCard/NewCard';
import './NewsList.css';
import { SearchContext } from '../../contexts/SearchContext';
import axios from 'axios';

function NewsList() {
    const state = useContext(SearchContext)
    const apiKey = 'd751ad452b2646ca96892d86f2931b9a'
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    useEffect(() => {
        if (state.search) {
            setErrorMessage('')
            setLoading(true)
            axios.get(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${state.search}&pageSize=10&language=es`)
            .then(data => {
                setArticles(data.data);
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                setErrorMessage(`${err.message}. Se a producido un error del tipo ${err.code}`)
            })
        }
    }, [state])
    return (
        <div className='cards-container'>
            { articles.totalResults && !loading ?
            <span className='results-total'>Está viendo 10 noticias de {articles.totalResults} resultados</span> :
            <span className='results-total'></span>
            }
            { loading ? 
                <div className='loading-feedback'>
                    <div className='loading-animation'></div>
                </div> : 
            articles.articles && articles.articles.map((item, index) => (
                <NewCard article={item} key={index}/>
            ))}
            { errorMessage !== '' && 
                <div className='error-feedback'>
                    {errorMessage}
                </div>
            }
        </div>
    )
}

export default NewsList;