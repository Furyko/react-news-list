import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import NewsList from '../components/NewsList/NewsList';
import SearchBar from '../components/SearchBar/SearchBar';
import { SearchContext } from '../contexts/SearchContext';

function HomePage() {
    const [context, setContext] = useState({search: '', page: 1});
    return (
        <div>
            <Navbar/>
            <main>
                <SearchContext.Provider value={{context: context, setContext: setContext}}>
                    <SearchBar/>
                    <NewsList/>
                </SearchContext.Provider>
            </main>
        </div>
    )
}

export default HomePage;