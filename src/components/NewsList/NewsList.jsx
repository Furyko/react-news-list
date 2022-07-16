import React from 'react';
import { useEffect, useState, useContext } from 'react';
import NewCard from '../NewCard/NewCard';
import './NewsList.css';
import { SearchContext } from '../../contexts/SearchContext';
import { PageContext } from '../../contexts/PageContext';
import axios from 'axios';
import swal from 'sweetalert';
import PaginationBar from '../PaginationBar/PaginationBar';

function NewsList() {
    const state = useContext(SearchContext)
    const pageState = useContext(PageContext)
    const apiKey = 'd751ad452b2646ca96892d86f2931b9a'
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (state.search) {
            setLoading(true)
            axios.get(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=${state.search}&pageSize=10&language=es&page=${pageState.page}`)
            .then(data => {
                setArticles(data.data);
                setLoading(false)
                if (data.data.articles.length === 0) {
                    swal({
                        text: 'No hay resultados para esta busqueda',
                        icon: 'info',
                        button: true,
                    })
                }
            })
            .catch(err => {
                setLoading(false)
                swal({
                    title: err.message,
                    text: `Se a producido un error del tipo ${err.code}`,
                    icon: 'error',
                    button: true,
                })
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
            <PaginationBar/>
        </div>
    )
}

export default NewsList;