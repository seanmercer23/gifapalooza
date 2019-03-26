import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Search (props) {
    return (
        <div className="search">
            <Header />
            <form onSubmit={props.handleSubmit}>
                <input 
                type="text" 
                placeholder="Search Tenor Gif" 
                value={props.value}
                onChange={props.handleChange}
                >
                </input>
                <input type="submit" value="Search"></input>
            </form>
            <div className="gifs">
                {props.renderGifs()}
            </div>
            <Footer />
        </div>
    )
}

export default Search