import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Random (props) {
    return (
        <div className={props.searchDisplay ? "random-no-search" : "random-yes-search"}>
            <Header />
                <div className={props.searchDisplay ? "random-result-true" : "random-result-false"}>{props.renderRandomGif()}</div>
                <div className={props.searchDisplay ? "random-result-false" : "random-result-true"}>
                </div>
                <div 
                    id={props.searchDisplay ? "gif-wheel-true" : "gif-wheel-false"}
                    className={props.condition ? "spin" : ""} 
                    onClick={props.handleRandomClick}
                    onAnimationEnd={props.spinEnd}
                >
                    <p className="wheel-instructions">Spin<br /> Me!</p>
                </div>
            <Footer />
        </div>
    )
}

export default Random