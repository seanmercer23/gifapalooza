import React from 'react'
import {Link} from 'react-router-dom'

function Home (props) {
    return(
        <div className="home">
            <nav>
                <Link to="/main">Enter</Link>
            </nav>
        </div>
    )
}

export default Home