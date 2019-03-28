import React from 'react'
import {Link} from 'react-router-dom'

function Main (props) {
    return (
        <div className="main">
            <h1 className="row0">Welcome to Gifapalooza</h1>
            <nav>
                    <div className="row1"><h2><Link to="/search">Gif Search</Link></h2></div>
                        <div className="row2"><h3>Find the gif of your dreams using our magical search</h3></div>
                    <div className="row3"><h2><Link to="/random">Random Gif</Link></h2></div>
                        <div className="row4"><h3>Spin the wheel of gifs and see what you get!</h3></div>
            </nav>
        </div>
    )
}

export default Main