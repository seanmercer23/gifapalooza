import React from 'react'
import {Link} from 'react-router-dom'

function Home (props) {
    return(
        <div className="home">
            <nav className="home-nav">
                <div className="enter-link">
                    <Link className="enter" to="/main">Enter</Link>
                </div>
            </nav>
        </div>
    )
}

export default Home