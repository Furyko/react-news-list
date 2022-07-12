import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import NewsList from '../components/NewsList/NewsList';
import SearchBar from '../components/SearchBar/SearchBar';
import { SearchContext } from '../contexts/SearchContext';

function HomePage() {
    const [search, setSearch] = useState('');
    return (
        <div>
            <Navbar/>
            <main>
                <SearchContext.Provider value={{search: search, setSearch: setSearch}}>
                    <SearchBar/>
                    <NewsList/>
                </SearchContext.Provider>
            </main>
        </div>
    )
}

export default HomePage;