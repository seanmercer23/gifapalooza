import React from 'react'
import {Link} from 'react-router-dom'

function Header (props) {
    return (
        <div className="header">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/random">Random</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header