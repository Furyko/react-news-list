import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">RNewsL</div>
            <ul className="nav-links">
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;