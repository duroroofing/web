import React from 'react'

import './Carousel.css'

import bgImage from '../../assets/test-bg.jpg'

const Carousel = () => {
    return (
        <div className="carousel">
            <div>
                <img src={bgImage} />
            </div>
            <div className="copy-wrap">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus pulvinar lobortis.</h1>
            </div>
        </div>
    )
}

export default Carousel