import React from 'react'
import {Link} from 'react-router-dom'

function Header (props) {
    return (
        <div className="header">
            <header>
                <nav className="header-nav">
                    <ul>
                        <li><Link className="nav-link" to="/random">Wheel of Gifs</Link></li>
                        <li className="nav-link"> | </li>
                        <li><Link className="nav-link" to="/search">Find Your Perfect Gif</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header