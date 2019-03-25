import React from 'react'
import {Link} from 'react-router-dom'

function Main (props) {
    return (
        <div>
            This is the main page
            <nav>
                <ul>
                    <li><Link to="/search">Gif Search</Link></li>
                    <li><Link to="/random">Random Gif</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Main