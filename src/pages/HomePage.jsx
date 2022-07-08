import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NewsList from '../components/NewsList/NewsList';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <main>
                <NewsList/>
            </main>
        </div>
    )
}

export default HomePage;