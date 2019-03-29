import React from 'react'
import Header from './Header';
import Footer from './Footer';

function Search (props) {
    return (
        <div className={props.searchDisplay ? "search-no-gifs" : "search-with-gifs"}>
            <Header />
            <div className="gif-search">
                <form onSubmit={props.handleSubmit} className="search-form">
                    <input 
                    type="text" 
                    placeholder="Search Tenor Gif" 
                    value={props.value}
                    className="search-bar"
                    onChange={props.handleChange}
                    >
                    </input>
                    <input type="submit" className="submit" value="Search"></input>
                </form>
            </div>
            <div className={props.searchDisplay ? "show-directions" : "hide"}>
                <img className="point-gif" alt="look up" src="https://media1.tenor.com/images/5bd5452e04baaa209b24ac1afbedbc00/tenor.gif"/>
                <p className="search-direction">Enter your search above!</p>
            </div>
            <div className="gifs">
                {props.renderGifs()}
            </div>
            <div className="next"><button className={props.searchDisplay ? "hide" : "next-button"} onClick={props.nextResults}>Next</button></div>
            <Footer />
        </div>
    )
}

export default Search