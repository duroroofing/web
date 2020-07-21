import React from 'react'

import Button from '../Button'

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
                <Button>Get Quote</Button>
            </div>
        </div>
    )
}

export default Carousel