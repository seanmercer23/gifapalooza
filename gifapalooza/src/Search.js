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
            <button className={props.searchDisplay ? "hide" : "next-button"} onClick={props.nextResults}>Next</button>
            <Footer />
            <img 
                src="https://media1.tenor.com/images/9debdd22dd9e43074b7efe9f3a59c570/tenor.gif" 
                className={props.searchDisplay ? "shame" : "hide"} 
            />
        </div>
    )
}

export default Search