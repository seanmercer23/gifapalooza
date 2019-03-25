import React from 'react'

function Search (props) {
    return (
        <div>
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
            <div>
                {props.renderGifs()}
            </div>
        </div>
    )
}

export default Search