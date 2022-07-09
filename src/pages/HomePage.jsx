import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NewsList from '../components/NewsList/NewsList';
import SearchBar from '../components/SearchBar/SearchBar';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <main>
                <SearchBar/>
                <NewsList/>
            </main>
        </div>
    )
}

export default HomePage;