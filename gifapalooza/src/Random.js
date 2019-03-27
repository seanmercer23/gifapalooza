import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Random (props) {
    return (
        <div className="random">
            <Header />
            {props.renderRandomGif()}
            <div 
            id="gif-wheel" 
            className={props.condition ? "spin" : ""} 
            onClick={props.handleRandomClick}
            onAnimationEnd={props.spinEnd}
            >
            </div>
            <Footer />
        </div>
    )
}

export default Random