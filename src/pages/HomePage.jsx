import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NewsList from '../components/NewsList/NewsList';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <NewsList/>
        </div>
    )
}

export default HomePage;