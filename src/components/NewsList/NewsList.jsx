import React from 'react';
import { useEffect, useState } from 'react';
import NewCard from '../NewCard/NewCard';

function NewsList() {
    const apiKey = 'd751ad452b2646ca96892d86f2931b9a'
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?apiKey=${apiKey}&q=bitcoin&pageSize=10`)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            {articles.map((item, index) => (
                <NewCard article={item} key={index}/>
            ))}
        </div>
    )
}

export default NewsList;