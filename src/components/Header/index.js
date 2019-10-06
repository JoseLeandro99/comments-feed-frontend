import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
    return(
        <header className="app-header">
            <ul>
                
                <li>
                    <Link to="/feed">Feed</Link>
                </li>

                <li>
                    <Link to="/new">New</Link>
                </li>

            </ul>
        </header>
    );
}

export default Header;