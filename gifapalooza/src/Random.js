import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Random (props) {
    return (
        <div>
            <Header />
            {props.renderRandomGif()}
            <Footer />
        </div>
    )
}

export default Random