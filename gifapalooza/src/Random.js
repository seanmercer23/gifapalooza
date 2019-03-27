import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Random (props) {
    return (
        <div className="random">
            <Header />
            <div className="random-gif">{props.renderRandomGif()}</div>
            <div 
            id="gif-wheel" 
            className={props.condition ? "spin" : ""} 
            onClick={props.handleRandomClick}
            onAnimationEnd={props.spinEnd}
            >
            <p className="wheel-instructions">Spin Me</p>
            </div>
            <Footer />
        </div>
    )
}

export default Random