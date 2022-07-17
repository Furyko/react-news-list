import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import NewsList from '../components/NewsList/NewsList';
import SearchBar from '../components/SearchBar/SearchBar';
import { SearchContext } from '../contexts/SearchContext';
import { PageContext } from '../contexts/PageContext';
import Footer from '../components/Footer/Footer';

function HomePage() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    return (
        <div>
            <Navbar/>
            <main>
                <SearchContext.Provider value={{search: search, setSearch: setSearch}}>
                    <PageContext.Provider value={{page: page, setPage: setPage}}>
                        <SearchBar/>
                        <NewsList/>
                    </PageContext.Provider>
                </SearchContext.Provider>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage;